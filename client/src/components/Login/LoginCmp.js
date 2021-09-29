import React, { useContext } from "react";

import { Context } from '../../context/Context';
import { GoogleLoginCmp } from '../Social/GoogleLoginCmp';
import { FacebookLoginCmp } from '../Social/FacebookLoginCmp';
import "./LoginCmp.css"

const loc = require("../../const/locale.json");
export const LoginCmp = () => {
    const cont = useContext(Context)
    return (
        <>
            <span className="title login" >
                {loc.Login[cont.lang]} 
            {/* <div className="login" > */}
            <>
                <GoogleLoginCmp />
                <FacebookLoginCmp />
            </>
            {/* </div> */}
            </span>
        </>
    )
}
