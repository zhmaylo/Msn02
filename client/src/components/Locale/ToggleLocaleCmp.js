import React from "react"
// import { getStoreCurrent, getStoreNext } from "../api/storageToggleApi"
import Button from 'react-bootstrap/Button'
import { KEY_LOCALE } from "./../../const/storageKeyConst";
import { getStoreCurrent, getStoreNext } from './../../api/storageToggleApi';


export const ToggleLocale = ({ onChange }) => {
    let localeState = getStoreCurrent(KEY_LOCALE);

    const changeLocale = () => {
        localeState = getStoreNext(KEY_LOCALE);
        onChange(localeState);
    }

    const ButtonLocale = () => {
        return (<>
            <Button variant={"outline-secondary"} style={{marginLeft : 5 }}
                onClick={() => changeLocale()}
            >
                <span> {localeState ? "RU" : "EN"} </span>
            </Button>
        </>)
    }

    return <ButtonLocale />
}

