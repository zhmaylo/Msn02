import React, { useContext } from 'react';
import { TASK_CARD_STYLE } from './../const/style';
import { Context } from './../context/Context';
import { AddTaskFormCmp } from './../components/AddTask/AddTaskFormCmp';

const loc = require("../const/locale.json");

export const AddTaskPage = () => {

    const cont = useContext(Context);

    console.log("🚀 ~ file: AddTaskPage.js ~ line 30 ~ AddTaskPage");
    return (
        <div className={TASK_CARD_STYLE}>
            <p style={{ textAlign: "center", paddingTop: 10 }}> {loc.CreateTask[cont.lang]} </p>
            <AddTaskFormCmp/>
        </div>
    )
}





