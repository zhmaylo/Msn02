import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Context } from '../context/Context'

const loc = require ("../const/locale.json");

export const Search = () => {
    const cont = useContext(Context)
    return (

        <InputGroup className="col md-2 offset-1" style={{ marginRight: 15 }} >
            <FormControl
                placeholder={loc.Search[cont.lang]}
                aria-label={loc.Search[cont.lang]}
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
                <span className='bi bi-search' > </span>
            </Button>

        </InputGroup>

    )
}