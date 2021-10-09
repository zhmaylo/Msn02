import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { Loading } from "../components/Loading/LoadingCmp";
import { useGetList } from "../api/adminApi";
import { UserTableCmp } from '../components/Admin/UserTableCmp';
import { STYLE_TABLE } from './../const/style';

export const AdminPage = () => {

    const [userList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const { getList } = useGetList();

    useEffect(() => {
        getList(setLoading, setUserList)
    }, [getList])

    if (!isLoading) return (<Loading />)
    return (
        <Container className={STYLE_TABLE}>
            <UserTableCmp userList={userList} />
        </Container>
    )
}

