import React, { useEffect, useState } from "react";

import { useGetTasksAndOrder } from "../api/mainpageApi";
import { TaskCardListCmp } from './../components/TaskCard/TaskCardListCmp';
import { Loading } from './../components/Loading/LoadingCmp';
import { SortBarCmp } from './../components/MainPage/SortBarCmp';
import { TASK_CARD_STYLE } from './../const/style';
import { CloudTagsCmp } from "../components/MainPage/CloudTagsCmp";
import { createAt } from './../const/mainConst';


export const MainPage = () => {
    const [tasksOrdered, setTaskOrdered] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [fieldState, setField] = useState(createAt);
    const [tagState, setTag] = useState("");
    const { getTasksAndOrder } = useGetTasksAndOrder();


    useEffect(() => {
        getTasksAndOrder(createAt, '').then((task) => {
            setTaskOrdered(task);
            setIsLoading(true)
        })
    }, [getTasksAndOrder])

    useEffect(() => {
        getTasksAndOrder(fieldState, tagState).then((task) => {
            setTaskOrdered(task)
        })
    },[fieldState, tagState,getTasksAndOrder])
    
    if (!isLoading) {
        return (<Loading />)
    }
    return (
        <>
            <div className={TASK_CARD_STYLE}>
                <SortBarCmp setField={setField} />
                <CloudTagsCmp setTag={setTag} /> 
                <TaskCardListCmp tasksOfUser={tasksOrdered} />
            </div>
        </>
    )
}
