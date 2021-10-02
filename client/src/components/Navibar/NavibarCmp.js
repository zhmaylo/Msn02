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

    const GetLog = () => {
        console.log("🚀 ~ file: NavibarCmp.js ~ line 22 ~ cont.userInfo.id", cont.userInfo.id);
        if (cont.userInfo.id)  return ( <LogoutCmp />)
        else return  (<LoginCmp />)
    }

    return (

        <Navbar className="navbar" bg="light" expand="lg" >
            <Container>
                <Navbar.Brand href="/main">MSN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/main">{loc.Main[cont.lang]}</Nav.Link>
                        {!!cont.userInfo &&
                            <Nav.Link href={`/mypage/${cont.userInfo.id}`}>
                                {loc.MyPage[cont.lang]}
                            </Nav.Link>}
                        {!!cont.userInfo &&
                            <Nav.Link href="/admin">
                                {loc.AdminPanel[cont.lang]}
                            </Nav.Link>}
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
                            {/* {!cont.userInfo ? <LogoutCmp onChange={() => { cont.setUserState() }} /> : <LoginCmp />} */}
                            <GetLog/>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
