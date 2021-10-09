import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Redirect, useParams } from 'react-router-dom';

export const TaskPage = () => {
    const cont = useContext(Context)
    // if (!cont.userData) <Redirect to="/main" />
    const {task} = useParams().task;
    console.log("🚀 ~ file: TaskPage.js ~ line 9 ~ task", task);
    return (
        <>
            <p>Task page</p>
        </>
    )
}