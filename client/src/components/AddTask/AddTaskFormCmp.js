import React, { useContext } from 'react';
import Card from "react-bootstrap/Card";
import { HeaderAddCmp } from './HeaderAddCmp';


import { TagsCmp } from '../TaskCard/TagsCmp';
import { AnswerCmp } from '../TaskCard/AnswerCmp';
import { Context } from '../../context/Context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ConditionAddCmp } from './ConditionAddCmp';

const loc = require("../../const/locale.json");

export const AddTaskFormCmp = () => {
    const taskOfUser = "newTask"

    const cont = useContext(Context);

    console.log("🚀 ~ file: AddTaskPage.js ~ line 30 ~ AddTaskPage");
    return (
        <>
            <Form>
                <Card.Header className="mb-2">
                    <HeaderAddCmp />
                </Card.Header>
                <Card.Header className="mb-2">
                    <ConditionAddCmp />
                </Card.Header>
                <Card.Footer>
                    <TagsCmp tags={taskOfUser.tags} />
                </Card.Footer>
                <Card.Footer>
                    <AnswerCmp answer={taskOfUser.answer} />
                </Card.Footer>
            </Form>
            <div className="d-flex flex-row-reverse pt-3 pb-3" >
                <Button variant="outline-secondary" type="submit">
                    {loc.PreviewTask[cont.lang]}
                </Button>
            </div>
        </>
    )
}

