import React, { useContext } from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import { AdminPage } from "./pages/AdminPage"
import { MainPage } from "./pages/MainPage"
import { MyPage } from "./pages/MyPage"
import { UserPage } from "./pages/UserPage"
import { Context } from './context/Context';
import { SearchPage } from './pages/SearchPage';
import { AddTaskPage } from './pages/AddTaskPage';


export const Routes = () => {
    const cont = useContext(Context)

    const AuthPage = () => {
        if (cont.userData.isAuth)
            return (
                <>
                    <Route path="/admin" exact> <AdminPage /> </Route>
                    <Route path="/mypage" exact> <MyPage /> </Route>
                    <Route path="/userpage/:id/:name/:mypage?"> <UserPage /> </Route>
                    <Route path="/addtaskpage"> <AddTaskPage /> </Route>
                </>
            )
        return (<Redirect to="/main" />)
    }

    return (
        <Switch>
            <Route path="/main" exact> <MainPage /> </Route>
            <Route path="/searchpage"> <SearchPage /> </Route>
            <AuthPage />
        </Switch>
    )
}
