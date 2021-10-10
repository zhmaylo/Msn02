import React, { useContext } from "react";

import { Context } from '../../context/Context';
import { Fa1cebookLoginCmp } from "../Social/FacebookLoginCmp";
import { GoogleLoginCmp } from '../Social/GoogleLoginCmp';


const loc = require("../../const/locale.json");
export const LoginCmp = () => {
    const cont = useContext(Context)
    
    return (
        <>
            <span className="title" >{loc.Login[cont.lang]} </span>
            <div className="login" >
                <GoogleLoginCmp />
                <Fa1cebookLoginCmp />
            </div>
        </>
    )
}
