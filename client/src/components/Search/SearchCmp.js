import React, { useEffect, useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Context } from '../../context/Context'
import { debounce, useGetSearchResult } from "../../api/searchApi";
import { IsLoading } from './IsLoading';
import { Redirect } from 'react-router-dom';

const loc = require("../../const/locale.json");

export const Search = () => {
    const [isLoad, setIsLoad] = useState(false);
    const [isRedirect, setIsRedirect] = useState(false);
    const [onFocus, setOnFocus] = useState(false);
    const [formData, setFormData] = useState('');

    const { getSearchResult } = useGetSearchResult();
    let cont = useContext(Context);

    const searchResultHandler = (tasks) => {
        setIsLoad(false);
        cont.setSearchResult(tasks);
        setFormData(cont.inputFormData)
        setIsRedirect(true)
    }

    const getSearch = debounce((data) => {
        setIsLoad(true);
        getSearchResult(data).then((tasks) => {
            searchResultHandler(tasks);
        })
    }, 500);

    useEffect(() => {
        setFormData(cont.inputFormData)
    }, [cont.inputFormData])

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
            <InputGroup style={{ marginRight: 15 }}>
                <FormControl
                    placeholder={loc.Search[cont.lang]}
                    defaultValue={formData}
                    type="text"
                    autoFocus={onFocus}
                    onFocus={() => {
                        setOnFocus(true);
                        if (window.location.href.indexOf("searchpage") < 0) setIsRedirect(true);
                    }}
                    onChange={(data) => {
                        getSearch(data.target.value);
                        cont.inputFormData = data.target.value;
                    }}
                />
                <Button variant="outline-secondary" >
                    <IsLoading getSearch={() => getSearch(formData)} visible={isLoad} />
                </Button>
            </InputGroup>
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

