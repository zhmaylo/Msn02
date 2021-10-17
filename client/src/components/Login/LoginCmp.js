import React, { useContext } from "react";

import { Context } from '../../context/Context';
import { FacebookLoginCmp } from "../Social/FacebookLoginCmp";
import { GoogleLoginCmp } from '../Social/GoogleLoginCmp';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const loc = require("../../const/locale.json");
export const LoginCmp = () => {
    const cont = useContext(Context)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {loc.LogInForExtendedAccessToTheSite[cont.lang]}
        </Tooltip>
    );
    
    return (
        <>
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >

                <span className="title" >{loc.Login[cont.lang]} </span>
            </OverlayTrigger>
            <div className="login" >
                <GoogleLoginCmp />
                <FacebookLoginCmp />
            </div>

        </>
    )
}
