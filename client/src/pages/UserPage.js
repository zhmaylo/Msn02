import React, { useContext } from "react";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { HeaderCmp } from './../components/UserPage/HeaderCmp';
import { AnswerCmp } from './../components/UserPage/AnswerCmp';
import { ConditionCmp } from './../components/UserPage/ConditionCmp';


export const UserPage = () => {
    const linkId = useParams().id;
    const cont = useContext(Context)
    return (
        <>
            <div className="card col-md-12 col-lg-8 col-xl-8 col-xxl-8 offset-lg-2 offset-xxl-2 ">
                <p>Страничка Ивана Иванова</p>
                <Card>
                    <Card.Header>
                        <HeaderCmp />
                    </Card.Header>
                    <Card.Body>
                        <ConditionCmp />
                    </Card.Body>


                    <Card.Footer>Теги </Card.Footer>
                    <AnswerCmp />
                </Card>
            </div>
        </>
    )
}