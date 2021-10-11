import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Context } from '../../context/Context'
import { debounce, useGetSearchResult } from "../../api/searchApi";

const loc = require("../../const/locale.json");

export const Search = () => {
    const { getSearchResult } = useGetSearchResult();

    const getSearch = debounce((data) => {
        console.log("🚀 ~ file: SearchCmp.js ~ line 17 ~ getSearch");
        getSearchResult(data);
        setForm(data);
    }, 500);

    const [form, setForm] = useState('');

    const cont = useContext(Context)
    return (
        <InputGroup style={{ marginRight: 15 }}>
            <FormControl
                placeholder={loc.Search[cont.lang]}
                type="text"
                onChange={(data) => {
                    getSearch(data.target.value);
                }}
            />
            <Button variant="outline-secondary" id="button-addon2">
                <span className='bi bi-search' 
                 onClick={() => {
                    getSearch(form);
                }}
                > </span>
            </Button>
        </InputGroup>
    )
}