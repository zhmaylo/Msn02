import React, { useCallback, useEffect, useState } from "react";
import { useHttp } from "../api/httpApi";
import Table from 'react-bootstrap/Table'
import Container from "react-bootstrap/Container";

export const AdminPage = () => {
    const { request } = useHttp()

    const [fet, setFet] = useState("hello");
    // let fet = "";
    const getLink = useCallback(async () => {
        let fet = await request('/admin/userlist', 'GET', null, {});
        console.log('🚀 ~ file: AdminPage.js ~ line 13 ~ getLink ~ fet', fet);
        return fet;
    }, [request])

    useEffect(() => {
        setFet(getLink())
        // console.log('🚀 ~ file: AdminPage.js ~ line 16 ~ useEffect ~ getLink()', fet);
        // console.log("🚀 ~ file: App.js ~ line 23 ~ fet", fet);
    }, [getLink])

    return (
        // <div clasName="col-md-4 coll-lg-3 col-xl-4 col-xxl-5">
            <Container className="col-9">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        // </div>
    )
}
