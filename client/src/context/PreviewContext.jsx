import { createContext, useContext, useState } from "react";

const PreviewContext = createContext();

export function PreviewProvider({ children }) {

    const [enabled, setEnabled] = useState(false);

    function togglePreview() {

        setEnabled((previous) => !previous);

    }

    return (

        <PreviewContext.Provider
            value={{
                enabled,
                togglePreview,
                setEnabled
            }}
        >

            {children}

        </PreviewContext.Provider>

    );

}

export function usePreview() {

    return useContext(PreviewContext);

}