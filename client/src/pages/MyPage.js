import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { useGetTasksOfUser } from './../api/userpageApi';
import { Loading } from './../components/Loading/LoadingCmp';
import Container from 'react-bootstrap/Container';
import { TaskTableCmp } from "../components/MyPage/TaskTableCmp";
import { TaskCardCmp } from './../components/TaskCard/TaskCardCmp';
import { NoTaskCmp } from "../components/TaskCard/NoTaskCmp";
import { BackButtonCmp } from "../components/MyPage/BackButtonCmp";
import { TASK_CARD_STYLE } from './../const/style';
import { MyPageHeaderCmp } from './../components/MyPage/MyPageHeaderCmp';


export const MyPage = () => {
    const [tasksOfUser, setTasksOfList] = useState([]);
    const [selectedTask, setSelectedTask] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { getTasksOfUser } = useGetTasksOfUser();
    const cont = useContext(Context);

    useEffect(() => {
        getTasksOfUser(cont.userData.id).then((tasksList) => {
            setTasksOfList(tasksList);
            setIsLoading(true);
        })
    }, [getTasksOfUser, cont.userData.id])

    const TaskTable = () => {
        return (
            <>
                <MyPageHeaderCmp tasksOfUser={tasksOfUser} />
                <TaskTableCmp tasksOfUser={tasksOfUser} setSelectedTask={setSelectedTask} />
            </>
        )
    }

    const ShowTaskCard = () => {
        return (
            <>
                <div className={TASK_CARD_STYLE}>
                    <BackButtonCmp link={'/mypage'} />
                    <TaskCardCmp taskOfUser={selectedTask} />
                </div>
            </>
        )
    }

    const ShowTaskTable = () => {
        return (
            <Container className={TASK_CARD_STYLE}>
                {(tasksOfUser.length === 0)
                    ? (<NoTaskCmp />)
                    : (<TaskTable />)
                }
            </Container>
        )
    }

    if (!isLoading) return (<Loading />)
    return (
        <>
            {(selectedTask.length === 0)
                ? (<ShowTaskTable />)
                : (<ShowTaskCard />)
            }
        </>
    )
}

