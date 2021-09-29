import React, { useCallback, useEffect, useState } from "react";
import { useHttp } from "../api/httpApi";

export const AdminPage = () => {
    const { request } = useHttp()

    const [fet, setFet] = useState("hello");
    // let fet = "";
    const getLink = useCallback(async () => {
        let fet = request('/api/hello', 'GET', null, {});
         fet = request('/api/hello', 'POST', null, {});
        return fet;
    }, [request])

    useEffect(() => {
        setFet(getLink())
        // console.log('🚀 ~ file: AdminPage.js ~ line 16 ~ useEffect ~ getLink()', fet);
        // console.log("🚀 ~ file: App.js ~ line 23 ~ fet", fet);
    }, [getLink])

    return (
        <>
            <span> Admin Page  </span>

        </>
    )
}
