import React, { useContext } from 'react';
import Card from "react-bootstrap/Card";
// import "./NoTaskCmp.css"
import { Context } from './../../context/Context';
const loc = require("../../const/locale.json");


export const NoTaskCmp = (task) => {
    const cont = useContext(Context)
    return (
        
            <div className="notask col-md-12 col-lg-8 col-xl-8 col-xxl-8 offset-lg-2 offset-xxl-2 ">
                <Card  className="text-center">
                    <Card.Header>
                    </Card.Header>
                    <Card.Body>
                        <div className="titleNoTask">
                            <p>{loc.TheUserHasNoTasksYet[cont.lang]}</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        
    )
}