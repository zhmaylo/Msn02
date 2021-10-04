import React, { useContext } from "react"

import "./NavibarCmp.css"
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

    const LogOutIn = () => {
        if (cont.userData.isAuth) {
            return (<LogoutCmp />)
        } return (<LoginCmp />)
    }

    const NavLink = () => {
        return (
            <>
                <Nav.Link href={`/mypage/${cont.userData.id}`}> {loc.MyPage[cont.lang]} </Nav.Link>
                <Nav.Link href="/admin"> {loc.AdminPanel[cont.lang]}</Nav.Link>
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
                        <Nav.Link href="/main">{loc.Main[cont.lang]}</Nav.Link>
                        {(cont.userData.isAuth) && (<NavLink />)}
                    </Nav>
                    <div className="search col-lg-2 col-xl-4 col-xxl-5" >
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
