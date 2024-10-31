import { NextFunction, Request, Response } from "express";
import { PromptReqSchema } from "../schema/auth";
import { CLF_ACCOUNT_ID, CLF_API_Token, CLF_MODEL } from "../secrets";

const generatePrompt = ({
  prompt,
  num_images,
  color,
  iconStyle,
  customColor,
}: {
  prompt: string;
  num_images: number;
  color: string;
  iconStyle: string;
  customColor: string;
}) => {
    let finalPrompt = `Generate an icon for: ${prompt}`;

    if (iconStyle) {
      finalPrompt += `, styled as ${iconStyle}`;
    }
  
    if (color) {
      finalPrompt += `, with color ${color}`;
    }
  
    if (customColor) {
      finalPrompt += `, using custom color ${customColor}`;
    }
  
    if (num_images && num_images > 1) {
      finalPrompt += `. Generate ${num_images} variations.`;
    }
  
    return finalPrompt;
};

export const generateImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = PromptReqSchema.parse(req.body);
  const { prompt, num_images, color, iconStyle, customColor } = body;
  let numImages = body.num_images;

  const finalPrompt = generatePrompt({ prompt, num_images, color, iconStyle, customColor })
console.log(finalPrompt)
  try {
    let images: any = [];
    
    while (numImages) {
      const response = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${CLF_ACCOUNT_ID}/ai/run/${CLF_MODEL}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${CLF_API_Token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt : finalPrompt,
            guidance: 8
          }),
        }
      );

      const responseBuffer = await response.arrayBuffer();
      const bufferString = Buffer.from(responseBuffer).toString("base64");

      images = [...images, `data:image/png;base64,${bufferString}`];
      numImages -= 1;
    
    }

    res.status(200).json({
      status: "Success",
      images,
    });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).send("Image generation failed");
  }
};
