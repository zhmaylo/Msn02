import React, { useEffect, useState } from "react";
import { useGetTasksOfUser } from "../api/userpageApi";
import { Loading } from "../components/Loading/LoadingCmp"
import { NoTaskCmp } from "../components/TaskCard/NoTaskCmp";
import { TitlePageCmp } from "../components/TaskCard/TitlePageCmp";
import { useParams } from 'react-router-dom';
import { TaskCardListCmp } from './../components/TaskCard/TaskCardListCmp';
import { TASK_CARD_STYLE } from './../const/style';
import { BackButtonCmp } from './../components/MyPage/BackButtonCmp';


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
        <div className={TASK_CARD_STYLE}>
            <BackButtonCmp link={'/admin'} /> <TitlePageCmp name={username} />
            {(tasksOfUser.length === 0) ? (<NoTaskCmp />) : (<TaskCardListCmp tasksOfUser={tasksOfUser} />)}
        </div>
    )
}



















