import React, { useContext } from "react"

import "./NavibarCmp.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { Context } from '../../context/Context'
import { Search } from "../Search/SearchCmp"
import { ToggleLocale } from '../Locale/ToggleLocaleCmp';
import { ToggleTheme } from '../Theme/ToggleThemeCmp';
import { LoginCmp } from '../Login/LoginCmp';
import { LogoutCmp } from '../Login/LogoutCmp';

const loc = require("../../const/locale.json");
const permissions = require("../../const/permissions.json");

export const Navibar = () => {
    const cont = useContext(Context)

    const isAdmin = () => {
        return permissions.admin.id.includes(cont.userData.id);
    }

    const LogOutIn = () => {
        if (cont.userData.isAuth) {
            return (<LogoutCmp />)
        } return (<LoginCmp />)
    }

    const AdminPanel = () => {
        return (
            <>
                <Nav.Link href={`/mypage`}> {loc.MyPage[cont.lang]} </Nav.Link>
                {(isAdmin()) && (<Nav.Link href="/admin"> {loc.AdminPanel[cont.lang]}</Nav.Link>)}
            </>
        )
    }
    return (

        <Navbar className="navbar" bg="light" expand="lg" >
            <Container>
                <Navbar.Brand href="/main">MSN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {(cont.userData.isAuth) && (<AdminPanel />)}
                    </Nav>
                    <div className="search col-lg-4 col-xl-5 col-xxl-6" >
                        <Search />
                    </div>
                    <div className="toggleLogout" >
                        <div className="toggle">
                            <ToggleTheme onChange={(themeFlag) => { cont.setThemeState(themeFlag) }} />
                            <ToggleLocale onChange={(localeFlag) => { cont.setLocaleState(localeFlag) }} />
                        </div>
                        <div className="login" >
                            <LogOutIn />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
