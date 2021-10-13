import React, { useContext } from "react";
import { TaskCardListCmp } from '../components/TaskCard/TaskCardListCmp';
import { TASK_CARD_STYLE } from '../const/style';
import { Context } from './../context/Context';
import Container from 'react-bootstrap/Container';

const loc = require('../const/locale.json');

export const SearchPage = () => {
    const cont = useContext(Context);
    const local = cont.lang;
    const message_NothingFound = loc.NothingFound[local];
    const message_SearchingResults = loc.SearchingResults[local];
    const searchResult = cont.searchResult;

    console.log("🚀 ~ file: SearchPage.js ~ line 16 ~ cont.searchResult", cont.searchResult);
    if ((!searchResult) || (searchResult.length === 0))
        return (
            <p className="d-flex justify-content-center pt-3"> {message_NothingFound} </p>
        )
    const sumResult = searchResult.length;
    return (
        <Container className={TASK_CARD_STYLE}>
            <p className="d-flex justify-content-center pt-3"> {message_SearchingResults} - {sumResult}</p>
            <TaskCardListCmp tasksOfUser={searchResult} />
        </Container>
    )
}
















