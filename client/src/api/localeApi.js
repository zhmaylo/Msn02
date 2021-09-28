import { useState } from "react"
import { en_EN, ru_RU } from "../const/localeConst";
import { KEY_LOCALE } from "../const/storageKeyConst";
import { getStoreCurrent } from "./storageToggleApi";


export const useLocale = () => {
    const [locale, setLocaleState] = useState(getStoreCurrent(KEY_LOCALE));
    let lang = locale ? en_EN : ru_RU;
    return { lang, setLocaleState }
}