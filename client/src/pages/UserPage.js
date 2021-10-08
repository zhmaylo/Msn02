import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";
import { TaskCardCmp } from "../components/TaskCard/TaskCardCmp";
import { useGetTasksOfUser } from "../api/userpageApi";
import { Loading } from "../components/LoadingCmp/LoadingCmp"

export const UserPage = () => {
    // const userid = useParams().id;
    const userid = '02';
    const cont = useContext(Context)

    const [tasksOfUser, setTasksOfUser] = useState([]);
    const { getTasksOfUser } = useGetTasksOfUser()

    useEffect(() => {
        setTasksOfUser(getTasksOfUser(userid));
    }, [getTasksOfUser, userid])



    if (!!tasksOfUser.length ) {
        return (<Loading />)
    }
    else
     {
        console.log("🚀 ~ file: UserPage.js ~ line 17 ~ UserPage ~ tasksOfUser", tasksOfUser)
        console.log("🚀 ~ file: UserPage.js ~ line 17 ~ UserPage ~ tasksOfUser.length", tasksOfUser.length)
        return (
            <>
                {/* <span> {tasksOfUser[0].name}</span> */}
                <TaskCardCmp task={tasksOfUser[0]} />
            </>
        )
    }
}