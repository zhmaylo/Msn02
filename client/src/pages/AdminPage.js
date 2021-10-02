import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
// import { Context } from './../context/Context';
import { Loading } from "../components/LoadingCmp/LoadingCmp";
import { UserTable } from "../components/AdminCmp/TableCmp";
import { useGetList } from "../api/adminApi";

// const loc = require("../const/locale.json");

export const AdminPage = () => {
    
    // const cont = useContext(Context)
    const [userList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const { getList } = useGetList();

    useEffect( () => {
         getList(setLoading, setUserList )
    }, [getList])

    if (!isLoading) return (<Loading />)
    return (
        <Container className="col-sm-8 col-md-7 col-lg-5 col-xl-5 col-xxl-4">
            <UserTable userList={userList} />
        </Container>
    )
}

