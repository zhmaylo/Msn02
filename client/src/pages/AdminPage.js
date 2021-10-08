import React, { useContext, useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { Loading } from "../components/LoadingCmp/LoadingCmp";
import { useGetList } from "../api/adminApi";
import { UserTableCmp } from './../components/AdminCmp/UserTableCmp';

export const AdminPage = () => {

    const [userList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const { getList } = useGetList();

    useEffect( () => {
         getList(setLoading, setUserList )
    }, [getList])

    if (!isLoading) return (<Loading />)
    return (
        <Container className="col-sm-10 col-md-9 col-lg-7 col-xl-7 col-xxl-5">
            <UserTableCmp userList={userList} />
        </Container>
    )
}

