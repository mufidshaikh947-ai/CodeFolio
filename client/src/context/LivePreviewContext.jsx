import { createContext, useContext, useState } from "react";

const LivePreviewContext = createContext();

export function LivePreviewProvider({ children }) {

    const [enabled, setEnabled] = useState(false);

    function togglePreview() {

        setEnabled(previous => !previous);

    }

    return (

        <LivePreviewContext.Provider
            value={{
                enabled,
                togglePreview
            }}
        >

            {children}

        </LivePreviewContext.Provider>

    );

}

export function useLivePreview() {

    return useContext(LivePreviewContext);

}