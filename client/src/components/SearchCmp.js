import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Context } from '../context/Context'

const loc = require ("../const/locale.json");

export const Search = () => {
    const cont = useContext(Context)
    return (

        <InputGroup className="col" style={{ marginRight: 15 }} expand="col">
        {/* // <InputGroup className="style={{ marginRight: 15 }} > */}
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