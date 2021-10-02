import { getStore } from "./storageApi";
import { KEY_LOGIN_NAME, KEY_LOGIN_ID } from '../const/storageKeyConst';
import { useState } from 'react';


let user = { id: getStore(KEY_LOGIN_ID), name: getStore(KEY_LOGIN_NAME) }


export const useUserState = () => {
    const [userInfo, setUserState] = useState(user);
    userToState = setUserState;
    return { userInfo, setUserState };
}


