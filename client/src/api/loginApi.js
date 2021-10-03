import { getStore, setStore } from "./storageApi";
import { KEY_LOGIN_NAME, KEY_LOGIN_ID } from '../const/storageKeyConst';
import { useState } from 'react';
import { request } from "./requestApi";

// let user = { id: getStore(KEY_LOGIN_ID), name: getStore(KEY_LOGIN_NAME) }
// let userToState;

// export const useUserState = () => {
//     const [userData, setUserState] = useState(user);
// userToState = setUserState;
// return { userData, setUserState };
// }


export const sendUserDataToStorage = (data) => {
    console.log("🚀 ~ file: loginApi.js ~ line 17 ~ data", data);
    const user = getUserIDName(data);
    userToStore(user);
    console.log("🚀 ~ file: loginApi.js ~ line 20 ~ user", user);
    return user;
}

export const removeUserDataFromStore = () => {
    userToStore({ id: null, name: null });
}

const getUserIDName = (data) => {
    const id = data.id || data.it.sT;
    const name = data.name || data.it.Re;;
    return { id: id, name: name }
}

const userToStore = (user) => {
    console.log("🚀 ~ file: loginApi.js ~ line 43 ~ user", user);
    setStore(KEY_LOGIN_ID, user.id);
    setStore(KEY_LOGIN_NAME, user.name);
    return;
}

export const sendUserDataToServer = async (data) => {
    // console.log("🚀 ~ file: loginApi.js ~ line 39 ~ user", user);
    let user = getUserIDName(data)
    await request('/login', 'POST', { user }, {});
}
