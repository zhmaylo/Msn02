import { getStore } from "./storageApi";
import { KEY_LOGIN_NAME, KEY_LOGIN_ID } from '../const/storageKeyConst';
import { useEffect, useState } from 'react';


let user = { id: getStore(KEY_LOGIN_ID), name: getStore(KEY_LOGIN_NAME) }


const useStateInit = (setUserState) => {
    useEffect(() => {
        setUserState(user)
    }, [])
}

export const useUserState = () => {
    const [userData, sendUserDataToState] = useState(user);
    useStateInit(sendUserDataToState)
    return { userData, setUserState: sendUserDataToState };
}


