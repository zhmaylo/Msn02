import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useGetTasksAndOrder } from "../api/mainpageApi";

export const MainPage = () => {
    const [tasksOrdered, setTaskOrdered] = useState(); 
    const {getTasksAndOrder} = useGetTasksAndOrder ()
    useEffect(()=>{
         getTasksAndOrder('createdAt').then ((task) => {
            //  setTaskOrdered(task);
             console.log("🚀 ~ file: MainPage.js ~ line 12 ~ useEffect ~ task", task);
        })
    },[getTasksAndOrder])

    return (
        <ButtonToolbar aria-label="Toolbar with button groups" className="d-flex pt-3 justify-content-center">
            <ButtonGroup className="me-2" aria-label="First group" >
                <Button variant="outline-secondary" >По дате</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
                <Button variant="outline-secondary">По рейтингу</Button>
            </ButtonGroup>
        </ButtonToolbar>
    )
}