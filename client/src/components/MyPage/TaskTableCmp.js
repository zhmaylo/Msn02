import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext } from 'react';
const loc = require("../../const/locale.json");

export const TaskTableCmp = ({ tasksList }) => {
console.log("🚀 ~ file: TaskTableCmp.js ~ line 9 ~ tasksList", tasksList);
    const cont = useContext(Context)
   
    return (
        <Table>
            <thead>
                <tr>
                    <th>{loc.MyTasks[cont.lang]}</th>
                </tr>
            </thead>
            <tbody>
                {tasksList.map((item) => {
                    return (
                        <tr key={item.id}>
                            {/* <td>{item.name}</td> */}
                            <td>
                                <Link to={`/taskpage/${item}`}>{item.name}</Link>
                            </td>
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

