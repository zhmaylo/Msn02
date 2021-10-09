import React, { useContext } from "react";
import Spinner from 'react-bootstrap/Spinner'
import { Context } from '../../context/Context';
import "./LoadingCmp.css"
const loc = require("../../const/locale.json");

export const Loading = () => {
    const cont = useContext(Context)

    return (
        <div className="loading" >
            <Spinner animation="border" role="status">
            </Spinner>
            <div>
            <p>{loc.Loading[cont.lang]}</p>
            </div>
        </div>
    )
}