import { useEffect, useRef, useState } from "react"
import { KEY_THEME } from "../const/storageKeyConst";
import { getStoreCurrent } from "./storage/storageToggleApi";

const getRefTheme = (str) => {
    return ("https://bootswatch.com/5/" + str + "/bootstrap.min.css")
};

const useInitTheme = (themeState, themeRef) => {
    useEffect(() => {
        let themeId = (!themeState) ? "spacelab" : "darkly"
        themeRef.current.setAttribute("href", getRefTheme(themeId));
    }, [themeState, themeRef])
}

export const useTheme = () => {
    const [themeState, setThemeState] = useState(getStoreCurrent(KEY_THEME))
    const themeRef = useRef(null);
    useInitTheme(themeState, themeRef);
    return { setThemeState, themeRef }
}
