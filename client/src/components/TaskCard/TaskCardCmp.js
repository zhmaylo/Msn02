import React from 'react';

import Card from "react-bootstrap/Card";
import { HeaderCmp } from './HeaderCmp';
import { ConditionCmp } from './ConditionCmp';
import { AnswerCmp } from './AnswerCmp';
import { TagsCmp } from './TagsCmp';


export const TaskCardCmp = ({ taskOfUser }) => {
    return (
        <>
            <div className="task col-md-12 col-lg-8 col-xl-8 col-xxl-8 offset-lg-2 offset-xxl-2 ">
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
        </>
    )
}