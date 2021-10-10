import React from 'react';
import Table from 'react-bootstrap/Table';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';


const loc = require("../../const/locale.json");

export const TaskTableCmp = ({ tasksOfUser, setSelectedTask }) => {
    const cont = useContext(Context)
    
    return (
        <Table>
            <thead>
                <tr>
                    <th>{loc.MyTasks[cont.lang]}</th>
                </tr>
            </thead>
            <tbody>
                {tasksOfUser.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>
                                <Button variant="link"
                                    onClick={() => {
                                        console.log("🚀 ~ file: TaskTableCmp.js ~ line 34 ~ tasksOfUser");
                                        setSelectedTask(item);
                                    }}
                                >
                                    {item.name}
                                </Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

