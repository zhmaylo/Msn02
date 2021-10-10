import React, { useContext } from 'react';
import Card from "react-bootstrap/Card";
import { Context } from './../../context/Context';
const loc = require("../../const/locale.json");


export const NoTaskCmp = (task) => {
    const cont = useContext(Context)
    return (
                <Card  className="text-center">
                    <Card.Header>
                    </Card.Header>
                    <Card.Body>
                        <div className="titleNoTask">
                            <p>{loc.NoTaskYet[cont.lang]}</p>
                        </div>
                    </Card.Body>
                </Card>
    )
}