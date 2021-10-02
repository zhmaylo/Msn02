import React, { useContext } from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import { AdminPage } from "./pages/AdminPage"
import { MainPage } from "./pages/MainPage"
import { MyPage } from "./pages/MyPage"
import { UserPage } from "./pages/UserPage"
import { Context } from './context/Context';


export const Routes = () => {
    const cont = useContext(Context)
    
    return (
        <Switch>
            <Route path="/main">
                <MainPage />
            </Route>
            {/* exact  - exact route match - точное совпадние маршрута*/}
            <Route path="/admin" exact>
                {cont.userInfo ? <AdminPage /> : <MainPage />}
            </Route>
            {/* id - dynamic parameter -  динамический параметр */}
            <Route path="/mypage">
                {cont.userInfo ? <MyPage /> : <MainPage />}
            </Route>
            <Route path="/userpage/:id">
                {cont.userInfo ? <UserPage /> : <MainPage />}
            </Route>
            {/* else */}
            <Redirect to="/main" />
        </Switch>
    )
}
