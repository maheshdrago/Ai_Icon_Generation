import {  useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { colors, IconStyles } from "../utils/constants";
import { SliderTab, SliderTabItem } from "../components/SliderTab";
import { useAppDispatch, useAppSelector } from "../utils/constants";

const Dashboard = ({ is_loggedin }: { is_loggedin: boolean }) => {
  
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [color, setColor] = useState("#aabbcc");
  const [iconStyle, setIconStyle] = useState<string | null>();
  const [image, setImage] = useState();
  const [prompt, setPrompt] = useState<string>("");
  const [customColor, setCustomColor] = useState<string>("fbeed9");

  const generateImage = async () => {
    const response = await axiosInstance.post("/image/generate", {
      prompt,
    });

    const data = await response.data;
    setImage(data.image);
  };

  const handlePromptChange = (e) => {
    const prompt = e.target.value;
    setPrompt(prompt);
  };

  const handleCustomColorChange = (e) => {
    const colorCode = e.target.value;
    setCustomColor(colorCode);
  };

  useEffect(() => {
    if (!is_loggedin) {
      navigate("/login");
    }
  }, [is_loggedin]);

  return (
    <div className="flex flex-col items-center justify-center  w-full z-0 relative">
      {/* <div className="w-full h-[100vh] z-10 absolute inset-0 bg-gray-300 bg-opacity-70">
        <div className="relative w-full h-full opacity-100 z-20 flex items-center justify-center ">
          <div className="w-2/5 h-2/5 rounded-lg shadow-md bg-white text-black opacity-100"></div>
        </div>
      </div> */}
      <section>

        <p className="text-3xl font-bold my-4">Let's generate your icon.</p>
        <button onClick={generateImage}>Generate Image</button>
        <img src={image} className="w-60 h-60" />
        <p className="my-4">
          Your results may vary. We are working on fine tuning results for each
          style. Here are some tips to make better icons:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-2 pl-12">
          <li>
            Do not ask for words or letters, AI does not generate characters and
            words correctly
          </li>
          <li>Simple prompts often work best</li>
          <li>Use variants once you find a starting icon you like</li>
          <li>Experiment with adding words, such as happy or vibrant</li>
        </ul>
      </section>

      <div className="flex flex-col justify-start items-start w-1/4 gap-2">
        <p>1. Describe your icon using a noun and adjective</p>
        <input
          placeholder="an angry bird"
          className="w-full p-2"
          onClick={handlePromptChange}
          value={prompt}
        ></input>
      </div>

      <SliderTab
        tabs={["Predefined", "Picker", "Custom"]}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        className="flex flex-col justify-center items-center gap-4 w-[90%] md:w-3/6 lg:w-2/6"
      >
        <SliderTabItem className="color-selector gap-4 w-full ">
          {colors.map((color) => (
            <div
              style={{ background: color.hex }}
              className={`rounded-md shadow-lg p-3 h-[4rem] w-[4rem] opacity-60 hover:opacity-95 hover:scale-[1.2] transition-all ease-in-out delay-100 cursor-pointer`}
            ></div>
          ))}
        </SliderTabItem>

        <SliderTabItem>
          <HexColorPicker color={color} onChange={setColor} />
        </SliderTabItem>

        <SliderTabItem className="">
          <input
            placeholder="Hex code"
            className="p-4 rounded"
            onChange={handleCustomColorChange}
          ></input>
          <div
            className="h-12 w-12 rounded-md p-4"
            style={{ background: `#${customColor}` }}
          ></div>
        </SliderTabItem>
      </SliderTab>

      <div className="w-2/6 my-12">
        <p className="text-2xl font-semibold my-6">
          3. Select a style for your icon
        </p>
        <div className="icon-styles ">
          {IconStyles.map((icon) => (
            <div
              style={{
                backgroundImage: `url(../src/assets/iconStyles/${icon.toLowerCase()}.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className={`relative h-24 w-24 rounded-md shadow-md cursor-pointer hover:scale-[1.2] transition-all delay-100 ease-in-out ${
                icon.toLowerCase() === iconStyle ? "scale-110" : ""
              }`}
              onClick={() => setIconStyle(icon.toLowerCase())}
            >
              <div
                className={`absolute inset-0  opacity-50 rounded-md ${
                  icon.toLowerCase() === iconStyle ? "block" : "hidden"
                }`}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
              ></div>
              <div
                className={`absolute top-1 right-1 bg-white rounded-full p-1 ${
                  icon.toLowerCase() === iconStyle ? "block" : "hidden"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="w-4 h-4"
                >
                  <path d="M9 16.2l-3.5-3.5a1 1 0 10-1.4 1.4l4.5 4.5a1 1 0 001.4 0l10-10a1 1 0 10-1.4-1.4L9 16.2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
