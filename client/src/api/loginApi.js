import { getStore, setStore } from "./storageApi";
import { KEY_LOGIN_NAME, KEY_LOGIN_ID } from '../const/storageKeyConst';
import { useState } from 'react';
import { request } from "./requestApi";

let user = { id: getStore(KEY_LOGIN_ID), name: getStore(KEY_LOGIN_NAME) }
let userToState;

export const useUserState = () => {
    const [userInfo, setUserState] = useState(user);
    userToState = setUserState;
    return { userInfo, setUserState };
}

export const login = (data) => {
    console.log("🚀 ~ file: loginApi.js ~ line 17 ~ data", data);
    getUserIDName(data);
    console.log("🚀 ~ file: loginApi.js ~ line 16 ~ user.id", user.id);
    console.log("🚀 ~ file: loginApi.js ~ line 18 ~ user.name", user.name);
    userToStore();
    sendUserDataToServer(user);
    return user;
}

export const logout = () => {
    user.id = user.name = null;
    userToStore();
    return user;
}

const getUserIDName = (data) => {
    user.id = data.id || data.it.sT;
    user.name = data.name || data.it.Re;;
}


const userToStore = () => {
    setStore(KEY_LOGIN_ID, user.id);
    setStore(KEY_LOGIN_NAME, user.name);
    userToState(user);
}

export const sendUserDataToServer = async (user) => {
    // console.log("🚀 ~ file: loginApi.js ~ line 39 ~ user", user);
    await request('/login', 'POST', { user }, {});
}
