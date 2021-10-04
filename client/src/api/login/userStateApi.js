import { getStore } from "../storageApi";
import { KEY_LOGIN_NAME, KEY_LOGIN_ID } from '../../const/storageKeyConst';
import { useEffect, useState } from 'react';
import { getUserIDName } from "./userStoreApi";


let user = { 
    id: getStore(KEY_LOGIN_ID), 
    name: getStore(KEY_LOGIN_NAME), 
    isAuth: (getStore(KEY_LOGIN_ID)==='null') ? (false) : (true)  }


const useStateInit = (setUserState) => {
    useEffect(() => {
        setUserState(user)
    }, [setUserState])
}

export const useUserState =  () => {
    const [userData, sendUserToState] = useState(user);
    useStateInit(sendUserToState);
    const sendUserDataToState = (data) => {
        sendUserToState(getUserIDName(data))
    }
    return { userData, sendUserDataToState };
}


