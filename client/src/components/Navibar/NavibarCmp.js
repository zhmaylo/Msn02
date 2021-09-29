import React, { useContext } from "react"
// import "./NavibarCmp.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { Context } from '../../context/Context'
import { Search } from "../SearchCmp"
import { ToggleLocale } from '../Locale/ToggleLocaleCmp';
import { ToggleTheme } from '../Theme/ToggleThemeCmp';
import { LoginCmp } from '../Login/LoginCmp';
import { LogoutCmp } from '../Login/LogoutCmp';

const loc = require("../../const/locale.json");


export const Navibar = () => {
    const cont = useContext(Context)

    return (
        <>
            <Navbar className="navbar" bg="light" expand="col" >
                <Container >
                    <Navbar.Brand href="/main">MSN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="navbarCollapse col-sm-3" id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link href="/main">{loc.Main[cont.lang]}</Nav.Link>
                            <Nav.Link href="/userpage/1">{loc.MyPage[cont.lang]}</Nav.Link>
                            {cont.userInfo && <Nav.Link href="/admin">{loc.AdminPanel[cont.lang]}</Nav.Link>}
                            <Search className="search" />
                        </Nav>
                        <div className="">
                            <div className="col-sm-8 offset-0" >
                                <span>
                                    <ToggleTheme onChange={(themeFlag) => { cont.setThemeState(themeFlag) }} />
                                    <ToggleLocale onChange={(localeFlag) => { cont.setLocaleState(localeFlag) }} />
                                    <LoginCmp />
                                    {cont.userInfo ? <LogoutCmp onChange={() => { cont.setUserState() }} /> : <LoginCmp />}
                                </span>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
