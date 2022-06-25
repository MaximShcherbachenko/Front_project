import "../../Ceil/ceil.css";

const PaletteColor = ({ hex, setColor, selected }) => {
    return (
        <div
            onClick={() => setColor(hex)}
            className={selected ? "palette-color selected" : "palette-color"}
            style={{ backgroundColor: hex }}
        ></div>
    );
};

export default PaletteColor;
