import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Redirect } from 'react-router-dom';

export const MyPage = () => {
    const cont = useContext(Context)
    if (!cont.userData) <Redirect to="/main" />
    return (
        <>
            <Redirect to={`/userpage/${cont.userData.id}/${cont.userData.name}`}></Redirect>
        </>
    )
}