import React from 'react';

import Card from "react-bootstrap/Card";
import { HeaderCmp } from './HeaderCmp';
import { ConditionCmp } from './ConditionCmp';
import { AnswerCmp } from './AnswerCmp';
import { TagsCmp } from './TagsCmp';



export const TaskCardCmp = ({ taskOfUser }) => {
    console.log("🚀 ~ file: TaskCardCmp.js ~ line 12 ~ taskOfUser", taskOfUser);
    return (
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
    )
}