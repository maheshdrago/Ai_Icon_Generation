import { NextFunction, Request, Response } from "express";
import { PromptReqSchema } from "../schema/auth";
import { CLF_ACCOUNT_ID, CLF_API_Token, CLF_MODEL } from "../secrets";





export const generateImage = async (req: Request, res: Response, next: NextFunction) => {
    const body = PromptReqSchema.parse(req.body)
    const prompt = body.prompt

    try {
        const response = await fetch( `https://api.cloudflare.com/client/v4/accounts/${CLF_ACCOUNT_ID}/ai/run/${CLF_MODEL}`,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${CLF_API_Token}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                prompt
            })
        })

        const responseBuffer = await response.arrayBuffer()
        const bufferString = Buffer.from(responseBuffer).toString("base64")

        res.status(200).json({
            status:"Success",
            image: `data:image/png;base64,${bufferString}`
        })

    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).send("Image generation failed");
    }
};
