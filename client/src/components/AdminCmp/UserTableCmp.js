import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext } from 'react';
const loc = require("../../const/locale.json");

export const UserTableCmp = ({ userList }) => {
    const cont = useContext(Context)
   
    return (
        <Table>
            <thead>
                <tr>
                    <th>{loc.UserID[cont.lang]}</th>
                    <th>{loc.UserName[cont.lang]}</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.uid}</td>
                            <td>
                                <Link to={`/userpage/${item.uid}/${item.name}`}>{item.name}</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

