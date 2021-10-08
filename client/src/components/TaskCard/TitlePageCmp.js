import React from 'react';
import { useContext } from 'react';
import { Context } from './../../context/Context';
const loc = require("../../const/locale.json");

export const TitlePageCmp = ({ name }) => {
    const cont = useContext(Context)
    return (
        <div className="text-center mt-3">
                        <p>{name} - {loc.personalPage[cont.lang]}</p>
        </div>
    )
}