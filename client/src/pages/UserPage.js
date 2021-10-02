import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

export const UserPage = () => {
    const linkId = useParams().id;
    const cont = useContext(Context)
    return (
        <>
        <span> User Page {linkId} </span>
        </>
    )
}