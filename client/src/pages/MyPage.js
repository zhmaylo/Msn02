import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Redirect } from 'react-router-dom';

export const MyPage = () => {
    // const linkId = useParams().id;
    const cont = useContext(Context)
    console.log('🚀 ~ file: MyPage.js ~ line 12 ~ MyPage ~ cont.userData.name', cont.userData.name);
    if (!cont.userData) <Redirect to="/main" />
    return (
        <>
        <span> My Page {cont.userData.name} </span>
        </>
    )
}