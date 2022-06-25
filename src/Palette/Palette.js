import PaletteColor from "./PaletteColor/PaletteColor";
import "./palette.css";
import React, { useEffect, useState, useContext } from "react";
import { MainContext } from "../context/mainContext";
import { setCeil } from "../api";
const hrxColorsArray = [
    "#000000",
    "#9D9D9D",
    "#FFFFFF",
    "#BE2633",
    "#E06F8B",
    "#493C2B",
    "#A46422",
    "#EB8931",
    "#F7E26B",
    "#2F484E",
    "#44891A",
    "#A3CE27",
    "#1B2632",
    "#005784",
    "#31A2F2",
    "#B2DCEF",
];

const Palette = () => {
    const [selectedColor, setSelectedColor] = useState(false);
    const { selectedCeil, setSelectedCeil } = useContext(MainContext);
    const changeColorCallback = () => {
        document.getElementById(selectedCeil).style.backgroundColor = selectedColor;
        setSelectedCeil(false);
        setSelectedColor(false);
    };
    const changeCeilColor = () => {
        setCeil(selectedCeil, selectedColor).then(changeColorCallback());
    };
    return (
        <div className="palette-container">
            <div className="palette">
                {hrxColorsArray.map((color, id) => (
                    <PaletteColor
                        hex={color}
                        key={id}
                        selected={color === selectedColor}
                        setColor={setSelectedColor}
                    ></PaletteColor>
                ))}
            </div>
            <div
                className={selectedColor ? "palette-accept" : "palette-accept inactive"}
                onClick={selectedColor && selectedCeil ? changeCeilColor : () => {}}
            >
                Accept
            </div>
        </div>
    );
};

export default Palette;
