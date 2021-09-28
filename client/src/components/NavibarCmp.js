import React, { useContext } from "react"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { Context } from '../context/Context'
import { Search } from "./SearchCmp"
import { ToggleLocale } from './Locale/ToggleLocaleCmp';
import { ToggleTheme } from './Theme/ToggleThemeCmp';
import { LoginCmp } from './Login/LoginCmp';
import { LogoutCmp } from './Login/LogoutCmp';

const loc = require("../const/locale.json");


export const Navibar = () => {
    const cont = useContext(Context)

    return (
        <>
            <Navbar bg="light" expand="lg" style={{ height: 60 }}>
                <Container>
                    <Navbar.Brand href="/main">MSN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/main">{loc.Main[cont.lang]}</Nav.Link>
                            <Nav.Link href="/userpage/1">{loc.MyPage[cont.lang]}</Nav.Link>
                            {cont.userInfo && <Nav.Link href="/admin">{loc.AdminPanel[cont.lang]}</Nav.Link>}
                        </Nav>
                        <Search />
                        <ToggleTheme onChange={(themeFlag) => { cont.setThemeState(themeFlag) }} />
                        <ToggleLocale onChange={(localeFlag) => { cont.setLocaleState(localeFlag) }} />
                        {cont.userInfo ? <LogoutCmp onChange={() => { cont.setUserState() }} /> : <LoginCmp />}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
