import { getStore,  setStore } from "./storageApi";
import { KEY_LOGIN_NAME, KEY_LOGIN_ID } from '../const/storageKeyConst';
import { useState } from 'react';

let user = { id: getStore(KEY_LOGIN_ID), name: getStore(KEY_LOGIN_NAME) }
let setUserstat;

export const useUserState = () => {
    const [userInfo, setUserState] = useState(user);
    setUserstat = setUserState;
    return { userInfo, setUserState };
}

export const login = (data) => {
    user.id = data.id || data.it.sT;
    user.name = data.name || data.it.Re;
    userToStore();
    return user;
}

export const logout = () => {
    user.id = user.name = null;
    userToStore();
    return user;
}

const userToStore = () => {
    setStore(KEY_LOGIN_ID, user.id);
    setStore(KEY_LOGIN_NAME, user.name);
    setUserstat(user);
}
