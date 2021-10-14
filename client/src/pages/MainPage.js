import React, { useEffect, useState } from "react";

import { useGetTasksAndOrder } from "../api/mainpageApi";
import { TaskCardListCmp } from './../components/TaskCard/TaskCardListCmp';
import { Loading } from './../components/Loading/LoadingCmp';
import { SortBarCmp } from './../components/MainPage/SortBarCmp';
import { TASK_CARD_STYLE } from './../const/style';
import { CloudTagsCmp } from './../components/CloudTags/CloudTagsCmp';


export const MainPage = () => {
    const [tasksOrdered, setTaskOrdered] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { getTasksAndOrder } = useGetTasksAndOrder()

    useEffect(() => {
        getTasksAndOrder('createdAt').then((task) => {
            setTaskOrdered(task);
            setIsLoading(true)
        })
    }, [getTasksAndOrder])

    const getTasksList = (field) => {
        getTasksAndOrder(field).then((task) => { setTaskOrdered(task) })
    }

    if (!isLoading) {
        return (<Loading />)
    }
    return (
        <>
            <div className={TASK_CARD_STYLE}>
                <SortBarCmp getTasksList={getTasksList} />
                <CloudTagsCmp />
                <TaskCardListCmp tasksOfUser={tasksOrdered} />
            </div>
        </>
    )
}
