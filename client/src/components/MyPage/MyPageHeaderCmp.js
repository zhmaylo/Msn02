import React from 'react';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import { FloatButton } from '../FloatButton/FloatButtonCmp';



const loc = require("../../const/locale.json");


export const MyPageHeaderCmp = ({ tasksOfUser }) => {
    const cont = useContext(Context);

    return (
        <div className="d-flex justify-content-between align-items-center">
            <p>{loc.TotalTasks[cont.lang]} - {tasksOfUser.length} </p>
            <FloatButton />
        </div>
    )
}

