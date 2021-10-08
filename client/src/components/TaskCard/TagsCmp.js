import React from 'react';
import { useContext } from 'react';
import { Context } from './../../context/Context';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const loc = require("../../const/locale.json");

export const TagsCmp = ({ tags }) => {
    const cont = useContext(Context)
    return (
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm"> <i class="bi bi-tags"></i> {loc.Tags[cont.lang]}:</InputGroup.Text>
                <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" readonly="true" value={tags} />
            </InputGroup>
    )
}