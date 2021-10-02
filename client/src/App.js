import React, { useEffect } from "react"
import { BrowserRouter as Route } from "react-router-dom"

import { Navibar } from './components/Navibar/NavibarCmp'
import { Context } from './context/Context'
import { useTheme } from './api/themeApi';
import { useLocale } from './api/localeApi';
import { useUserState } from "./api/loginApi";
import { Routes } from "./routes";

function App() {

  const { themeRef, setThemeState } = useTheme();
  const { lang, setLocaleState } = useLocale();
  const { userInfo, setUserState } = useUserState();


  return (
    <Context.Provider value={{ setThemeState, setLocaleState, lang, userInfo, setUserState}} >

      <Route>
        <div className="App" >
          <header className="App-header">
            <link id="theme-style" rel="stylesheet" ref={themeRef} />
          </header>
          <Navibar />
          <Routes />
        </div>
      </Route>
    </Context.Provider>
  );
}

export default App;
