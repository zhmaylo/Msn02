import React, { useEffect, useState } from "react";
import { useGetTasksOfUser } from "../api/userpageApi";
import { Loading } from "../components/Loading/LoadingCmp"
import { NoTaskCmp } from "../components/TaskCard/NoTaskCmp";
import { TitlePageCmp } from "../components/TaskCard/TitlePageCmp";
import { useParams } from 'react-router-dom';
import { TaskCardListCmp } from './../components/TaskCard/TaskCardListCmp';
import { TaskTableCmp } from './../components/MyPage/TaskTableCmp';
import Container from 'react-bootstrap/Container';
import { STYLE_TABLE } from './../const/style';

export const UserPage = () => {
    const userid = useParams().id;
    const username = useParams().name;
    const isMyPage = !!useParams().mypage;


    const [tasksOfUser, setTasksOfUser] = useState([]);
    const { getTasksOfUser } = useGetTasksOfUser();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getTasksOfUser(userid).then((tasksList) => {
            setTasksOfUser(tasksList);
            setIsLoading(true);
        })
    }, [getTasksOfUser, userid])

    const UserPageCmp = () => {
        return (
            <>
                <TitlePageCmp name={username} />
                {(tasksOfUser.length === 0) ? (<NoTaskCmp />) : (<TaskCardListCmp tasksOfUser={tasksOfUser} />)}
            </>
        )
    }

    const MyPageCmp = () => {
        return (
            <>
                <Container className={STYLE_TABLE}>
                    <TaskTableCmp tasksList={tasksOfUser} />
                </Container>
            </>
        )
    }

    if (!isLoading) {
        return (<Loading />)
    }
    return (
        <>
            {(isMyPage) ? (<MyPageCmp />) : (<UserPageCmp />)}
        </>
    )
}



















