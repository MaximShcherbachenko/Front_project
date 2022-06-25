import Ceil from "./Ceil/Ceil.js";
import Palette from "./Palette/Palette.js";
import { MainContextProvider } from "./context/mainContext.js";
import { getCeils } from "./api.js";
import { useEffect, useState } from "react";

const App = () => {
    const [ceils, setCeils] = useState([]);
    const [length, setLength] = useState(10);
    useEffect(() => {
        getCeils(setCeils, setLength);
    }, []);

    return (
        ceils && (
            <MainContextProvider>
                <div
                    className="container"
                    style={{
                        gridTemplateColumns: `repeat(${length}, 1fr)`,
                    }}
                >
                    {ceils.map((ceil) => (
                        <Ceil key={ceil.id} id={ceil.id} color={ceil.color} />
                    ))}
                </div>
                <Palette />
            </MainContextProvider>
        )
    );
};

export default App;
