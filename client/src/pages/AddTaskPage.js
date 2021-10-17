import React, { useContext } from 'react';
import Card from "react-bootstrap/Card";
import { HeaderCmp } from './../components/TaskCard/HeaderCmp';
import { ConditionCmp } from './../components/TaskCard/ConditionCmp';
import { TagsCmp } from './../components/TaskCard/TagsCmp';
import { AnswerCmp } from './../components/TaskCard/AnswerCmp';
import { TASK_CARD_STYLE } from './../const/style';
import { Context } from './../context/Context';
const loc = require("../const/locale.json");

export const AddTaskPage = () => {
    const taskOfUser = "newTask"

    const cont = useContext(Context);

    console.log("🚀 ~ file: AddTaskPage.js ~ line 30 ~ AddTaskPage");
    return (
        <div className={TASK_CARD_STYLE}>
            <p style={{ textAlign: "center", paddingTop: 10 }}> {loc.CreateTask[cont.lang]} </p>
            <Card>
                <Card.Header>
                    <HeaderCmp name={taskOfUser.name} rating={taskOfUser.rating} />
                </Card.Header>
                <Card.Body >
                    <ConditionCmp condition={taskOfUser.condition} />
                </Card.Body>
                <Card.Footer>
                    <TagsCmp tags={taskOfUser.tags} />
                </Card.Footer>
                <Card.Footer>
                    <AnswerCmp answer={taskOfUser.answer} />
                </Card.Footer>
            </Card>
        </div>
    )
}





