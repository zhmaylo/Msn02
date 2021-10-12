import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Context } from '../../context/Context'
import { debounce, useGetSearchResult } from "../../api/searchApi";
import { IsLoading } from './IsLoading';

import { Redirect } from 'react-router-dom';

const loc = require("../../const/locale.json");

export const Search = () => {
    const { getSearchResult } = useGetSearchResult();
    const [isLoad, setIsLoad] = useState(false);

    const [isRedirect, setIsRedirect] = useState(false);
    const [form, setForm] = useState('');
    const [onFocus, setOnFocus] = useState(false);

    let cont = useContext(Context);

    const getSearch = debounce((data) => {
        setIsLoad(true);

        cont.searchString = data;
        getSearchResult(data).then((tasks) => {
            setIsLoad(false);
            if (tasks.length > 0) {
                cont.searchResult = tasks;
                console.log("🚀 ~ file: SearchCmp.js ~ line 29 ~ tasks", tasks);
                setIsRedirect(true)
            }
        })
        setForm(data);
    }, 500);


    const RedirectToSearchPage = () => {
        setIsRedirect(false)
        return (
            <div>
                <Redirect to="/searchpage" />
            </div>
        )
    }

    const FormSearch = () => {
        return (
            <>
                <InputGroup style={{ marginRight: 15 }}>

                    <FormControl
                        placeholder={loc.Search[cont.lang]}
                        defaultValue={form}
                        type="text"
                        autoFocus={onFocus}
                        onFocus={() => {

                            console.log("🚀 ~ file: SearchCmp.js ~ line 57 ~ data");
                            setOnFocus(true);
                            if (window.location.href.indexOf("searchpage") < 0) setIsRedirect(true)
                            
                        }}
                        onChange={(data) => {
                            getSearch(data.target.value);
                      
                        }}
                    />
                    <Button variant="outline-secondary" >
                        <IsLoading getSearch={() => getSearch(form)} visible={isLoad} />
                    </Button>

                </InputGroup>
            </>
        )
    }
    return (
        <>
            {(isRedirect)
                ? (<RedirectToSearchPage />)
                : (<FormSearch />)}


        </>
    )
}

