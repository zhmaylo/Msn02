import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Context } from './../../context/Context';
const loc = require("../../const/locale.json");


export const AnswerCmp = ({ answer }) => {
    const cont = useContext(Context);
    return (
        <div className="answer">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="headerAnswer"> {loc.Answer[cont.lang]} </Accordion.Header>
                    <Accordion.Body>
                        {answer}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}