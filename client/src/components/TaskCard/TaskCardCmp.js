import React from 'react';
import "./TaskCardCmp.css";
import Card from "react-bootstrap/Card";
import { HeaderCmp } from './HeaderCmp';
import { ConditionCmp } from './ConditionCmp';
import { AnswerCmp } from './AnswerCmp';


export const TaskCardCmp = (task) => {
    return (
        <>
            <p>Страничка Сидр Сидоровича</p>
            <div className="task col-md-12 col-lg-8 col-xl-8 col-xxl-8 offset-lg-2 offset-xxl-2 ">
                <Card>
                    <Card.Header>
                        <HeaderCmp title={task.title} />
                    </Card.Header>
                    <Card.Body>
                        <ConditionCmp />
                    </Card.Body>
                    <Card.Footer>Теги </Card.Footer>
                    <Card.Footer>
                        <AnswerCmp />
                    </Card.Footer>
                </Card>
            </div>
        </>
    )
}