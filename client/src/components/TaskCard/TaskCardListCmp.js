import React from 'react';
import { TaskCardCmp } from './TaskCardCmp';

export const TaskCardListCmp = ({ tasksOfUser }) => {
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