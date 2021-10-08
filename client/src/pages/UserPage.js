import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { TaskCardCmp } from "../components/TaskCard/TaskCardCmp";
import { useGetTasksOfUser } from "../api/userpageApi";
import { Loading } from "../components/LoadingCmp/LoadingCmp"
import { NoTaskCmp } from "../components/TaskCard/NoTaskCmp";
import { TitlePageCmp } from "../components/TaskCard/TitlePageCmp";
import { useParams } from 'react-router-dom';

export const UserPage = () => {
    const userid = useParams().id;
    const username = useParams().name;
    // const userid = '02';
    // const username = 'Сидр Сидорович';
    const cont = useContext(Context)

    const [tasksOfUser, setTasksOfUser] = useState([]);
    const { getTasksOfUser } = useGetTasksOfUser();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getTasksOfUser(userid).then((tasksList) => {
            setTasksOfUser(tasksList);
            setIsLoading(true);
        })
    }, [getTasksOfUser, userid])


    if (!isLoading) {
        return (<Loading />)
    }
    return (
        <>
            <TitlePageCmp name={username} />
            {(tasksOfUser.length === 0) ? (<NoTaskCmp />) : (<TaskCardCmp taskOfUser={tasksOfUser[0]} />)}
        </>
    )
}