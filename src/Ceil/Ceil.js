import "./ceil.css";
import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";
const Ceil = ({ id, color }) => {
    const { selectedCeil, setSelectedCeil } = useContext(MainContext);

    return (
        <div
            id={id}
            onClick={() => setSelectedCeil(id)}
            style={{ backgroundColor: color }}
            className={selectedCeil === id ? "ceil selected" : "ceil"}
        ></div>
    );
};

export default Ceil;
