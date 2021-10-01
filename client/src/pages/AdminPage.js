import React, { useCallback, useEffect, useState } from "react";
import { useHttp } from "../api/httpApi";

export const AdminPage = () => {
    const { request } = useHttp()

    const [fet, setFet] = useState("hello");
    // let fet = "";
    const getLink = useCallback(async () => {
        let fet = await  request('/admin/userlist', 'GET', null, {});
        console.log('🚀 ~ file: AdminPage.js ~ line 11 ~ getLink ~ fet', fet);
         fet = await request('/api/hello', 'POST', null, {});
         console.log('🚀 ~ file: AdminPage.js ~ line 13 ~ getLink ~ fet', fet);
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
