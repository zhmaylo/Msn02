import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Context } from './../../context/Context';
import { useContext } from 'react';
const loc = require("../../const/locale.json");


export const HeaderAddCmp = ({ name, rating }) => {
    const cont = useContext(Context);
    return (
        <>
            <Form.Label>{loc.TaskName[cont.lang]}</Form.Label>
            <Form.Control type="text" placeholder={loc.EnterTaskName[cont.lang]} />
        </>
    )
}