import React, { useEffect, useState } from "react";
import { useGetTasksOfUser } from "../api/userpageApi";
import { Loading } from "../components/LoadingCmp/LoadingCmp"
import { NoTaskCmp } from "../components/TaskCard/NoTaskCmp";
import { TitlePageCmp } from "../components/TaskCard/TitlePageCmp";
import { useParams } from 'react-router-dom';
import { TaskCardListCmp } from './../components/TaskCard/TaskCardListCmp';

export const UserPage = () => {
    const userid = useParams().id;
    const username = useParams().name;
    
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
            {(tasksOfUser.length === 0) ? (<NoTaskCmp />) : (<TaskCardListCmp tasksOfUser={tasksOfUser} />)}
        </>
    )
}