import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useGetTasksAndOrder } from "../api/mainpageApi";

export const MainPage = () => {
    const [tasksOrdered, setTaskOrdered] = useState();

    const { getTasksAndOrder } = useGetTasksAndOrder()

    useEffect(() => {
        getTasksAndOrder('createdAt').then((task) => {
            setTaskOrdered(task);
            console.log("🚀 ~ file: MainPage.js ~ line 12 ~ useEffect ~ task", task);
        })
    }, [getTasksAndOrder])

    return (

        <div className="btn d-flex justify-content-center">
            <Button
                variant="outline-secondary"
                onClick={() => { }}
            >По дате</Button>
            <div className="btn">
                <Button variant="outline-secondary" >По рейтингу</Button>
            </div>
        </div>

        
    )
}