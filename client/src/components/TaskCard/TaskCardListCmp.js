import React from 'react';
import { TaskCardCmp } from './TaskCardCmp';

export const TaskCardListCmp = ({ tasksOfUser }) => {
console.log("🚀 ~ file: TaskCardListCmp.js ~ line 12 ~ tasksOfUser", tasksOfUser);
    return (
        <>
            {tasksOfUser.map((item, index) => {
                return (
                    <tr key={index} >
                        <td>{item.uid}</td>
                        <td className="pb-4">
                            <TaskCardCmp taskOfUser={item} />
                        </td>
                    </tr>
                )
            })}
        </>
    )
}