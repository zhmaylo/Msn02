import React, { useContext } from "react";
import { Redirect } from 'react-router-dom';
import { TaskCardListCmp } from '../components/TaskCard/TaskCardListCmp';
import { TASK_CARD_STYLE } from '../const/style';
import { Context } from './../context/Context';
import Container from 'react-bootstrap/Container';

const loc = require('../const/locale.json');

export const SearchPage = () => {
    const cont = useContext(Context);
    // cont.searchString = 
    // cont.lastPage = window.location.href;
    // console.log("🚀 ~ file: SearchPage.js ~ line 13 ~ window.location.href", window.location.href);
    console.log("🚀 ~ file: SearchPage.js ~ line 16 ~ cont.searchResult", cont.searchResult);
    if (!cont.searchResult)
        return (
            <p className="d-flex justify-content-center pt-3"> {loc.NothingFound[cont.lang]} </p>
        )
    return (
        <Container className={TASK_CARD_STYLE}>
            <p className="d-flex justify-content-center pt-3"> {loc.SearchingResults[cont.lang]} </p>
            <TaskCardListCmp tasksOfUser={cont.searchResult} />
        </Container>
    )
}
















