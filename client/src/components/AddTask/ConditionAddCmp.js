import React from 'react';
import Form from 'react-bootstrap/Form';
import { Context } from '../../context/Context';
import { useContext } from 'react';
const loc = require("../../const/locale.json");


export const ConditionAddCmp = ({ name, rating }) => {
    const cont = useContext(Context);
    return (
        <>
            <Form.Label>{loc.ConditionTask[cont.lang]}</Form.Label>
            <Form.Control as="textarea" rows={7} placeholder={loc.EnterTaskCondition[cont.lang]} />
        </>
    )
}