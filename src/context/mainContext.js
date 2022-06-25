import React, { createContext, useState } from "react";

export const MainContext = createContext(true);

export const MainContextProvider = ({ children }) => {
    const [selectedCeil, setSelectedCeil] = useState(false);
    const [ceils, setCeils] = useState([]);
    return (
        <MainContext.Provider
            value={{
                selectedCeil,
                ceils,
                setCeils,
                setSelectedCeil,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};
