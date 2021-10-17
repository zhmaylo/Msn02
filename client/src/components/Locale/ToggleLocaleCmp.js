import React, { useContext } from "react"

import Button from 'react-bootstrap/Button'
import { KEY_LOCALE } from "./../../const/storageKeyConst";
import { getStoreCurrent, getStoreNext } from '../../api/storage/storageToggleApi';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Context } from './../../context/Context';

const loc = require("../../const/locale.json");

export const ToggleLocale = ({ onChange }) => {
    let localeState = getStoreCurrent(KEY_LOCALE);
    const cont = useContext(Context)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {loc.ChangeLanguage[cont.lang]}
        </Tooltip>
    );

    const changeLocale = () => {
        localeState = getStoreNext(KEY_LOCALE);
        onChange(localeState);
    }

    const ButtonLocale = () => {
        return (<div className='togle'>
            <Button variant={"outline-secondary"}
                onClick={() => changeLocale()}
            >
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <span> {localeState ? "RU" : "EN"} </span>
                </OverlayTrigger>
            </Button>
        </div>)
    }

    return <ButtonLocale />
}

