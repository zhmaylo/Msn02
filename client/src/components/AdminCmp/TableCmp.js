import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

export const UserTable = ({ userList }) => {
    console.log("🚀 ~ file: TableCmp.js ~ line 5 ~ userList", userList);

    return (
        <Table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>User page</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.userid}</td>
                            <td>{item.username}</td>
                            <td>
                                <Link to={item.userpage}>Открыть</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

