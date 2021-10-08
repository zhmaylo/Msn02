import React from "react"
import Button from 'react-bootstrap/Button'

import { KEY_THEME } from "./../../const/storageKeyConst";
import { getStoreCurrent, getStoreNext } from './../../api/storage/storageToggleApi';

export const ToggleTheme = ({ onChange }) => {

    let themeState = getStoreCurrent(KEY_THEME);

    const changeTheme = () => {
        themeState = getStoreNext(KEY_THEME);
        onChange(themeState);
    }

    const ButtonDarkLight = () => {
        return (<>
            <Button variant={"outline-secondary"}
                onClick={() => { changeTheme() }}
            >
                <span className={themeState ? 'bi bi-lightbulb' : 'bi bi-lightbulb-fill'} />
            </Button>
        </>)
    }
    return <ButtonDarkLight />
}

