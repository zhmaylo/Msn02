import React from 'react';
import Table from 'react-bootstrap/Table';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { getDateFromSequelizeFormat, getTimeFromSequelizeFormat } from '../../api/datetimeApi';


const loc = require("../../const/locale.json");


export const TaskTableCmp = ({ tasksOfUser, setSelectedTask }) => {
    console.log("🚀 ~ file: TaskTableCmp.js ~ line 11 ~ tasksOfUser", tasksOfUser);
    const cont = useContext(Context);
     
    return (
        <div>
            <p>{loc.TotalTasks[cont.lang]} - {tasksOfUser.length} </p>
            <Table>
                <thead>
                    <tr>
                        <th>{loc.MyTasks[cont.lang]}</th>
                        <th>{loc.Rating[cont.lang]}</th>
                        <th>{loc.CreateDate[cont.lang]}</th>
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
                                <td>
                                    {item.rating}
                                </td>
                                <td> {`${getDateFromSequelizeFormat(item.createdAt)} ' ${getTimeFromSequelizeFormat(item.createdAt)}`}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

