import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";

type Color = {
    name: string,
    hex: string
}

export const colors:  Color[]= [
    { name: "blue", hex: "#0000FF" },
    { name: "red", hex: "#FF0000" },
    { name: "orange", hex: "#FFA500" },
    { name: "purple", hex: "#800080" },
    { name: "yellow", hex: "#FFFF00" },
    { name: "pink", hex: "#FFC0CB" },
    { name: "cyan", hex: "#00FFFF" },
    { name: "green", hex: "#008000" },
    { name: "teal", hex: "#008080" },
    { name: "black", hex: "#000000" },
    { name: "lime", hex: "#00FF00" },
    { name: "maroon", hex: "#800000" },
    { name: "navy", hex: "#000080" },
    { name: "gold", hex: "#FFD700" },
    { name: "silver", hex: "#C0C0C0" },
    { name: "indigo", hex: "#4B0082" },
    { name: "magenta", hex: "#FF00FF" },
    { name: "olive", hex: "#808000" },
    { name: "aqua", hex: "#00FFFF" },
    { name: "coral", hex: "#FF7F50" },
    { name: "violet", hex: "#EE82EE" },
    { name: "salmon", hex: "#FA8072" },
    { name: "chartreuse", hex: "#7FFF00" }
  ];


  export const IconStyles: string[] = [
    "3D",
    "Cartoonish",
    "Chalkboard",
    "Clay",
    "Doodle",
    "Flat",
    "Gradient",
    "Grunge",
    "Hand-drawn",
    "Isometric",
    "Line-art",
    "Metallic",
    "Minimalistic",
    "Mosaic",
    "Neon",
    "Origami",
    "Pixelated",
    "Polygon",
    "Pop-art",
    "Realistic",
    "Sticker",
    "Watercolor",
    "Woodcut"
  ]

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
  