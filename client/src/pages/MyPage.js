import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Redirect } from 'react-router-dom';

export const MyPage = () => {
    
    const cont = useContext(Context)
    if (!cont.userInfo) <Redirect to="/main" />
    return (
        <>
        <span> My Page {cont.userInfo.name}</span>
        </>
    )
}