import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import { AdminPage } from "./pages/AdminPage"
import { MainPage } from "./pages/MainPage"
import { UserPage } from "./pages/UserPage"

export const Routes = () => {
    return (
        <Switch>
            {/* exact  - exact route match - точное совпадние маршрута*/}
            <Route path="/admin" exact>
                <AdminPage />
            </Route>
            <Route path="/main">
                <MainPage />
            </Route>
            {/* id - dynamic parameter -  динамический параметр */}
            <Route path="/userpage/:id">
                <UserPage />
            </Route>
            {/* else */}
            <Redirect to="/main" />
        </Switch>
    )
}
