import React, { useContext } from "react"
import Button from 'react-bootstrap/Button'

import { KEY_THEME } from "./../../const/storageKeyConst";
import { getStoreCurrent, getStoreNext } from './../../api/storage/storageToggleApi';


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Context } from './../../context/Context';

const loc = require("../../const/locale.json");

export const ToggleTheme = ({ onChange }) => {

    let themeState = getStoreCurrent(KEY_THEME);

    const cont = useContext(Context)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {loc.ChangeTheme[cont.lang]}
        </Tooltip>
    );


    const changeTheme = () => {
        themeState = getStoreNext(KEY_THEME);
        onChange(themeState);
    }

    const ButtonDarkLight = () => {
        return (<>
            <Button variant={"outline-secondary"}
                onClick={() => { changeTheme() }}
            >
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <span className={themeState ? 'bi bi-lightbulb' : 'bi bi-lightbulb-fill'} />
                </OverlayTrigger>
            </Button>
        </>)
    }
    return <ButtonDarkLight />
}

