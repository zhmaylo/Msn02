import { setStore } from "../storageApi";
import { KEY_LOGIN_NAME, KEY_LOGIN_ID } from '../../const/storageKeyConst';

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

export const getUserIDName = (data) => {
    try {
        const id = data.id || data.it.sT;
        const name = data.name || data.it.Re;
        return { id: id, name: name, isAuth: true }
    }
    catch  (err) { return { id: null, name: null, isAuth: false } } 


}

const userToStore = (user) => {
    console.log("🚀 ~ file: loginApi.js ~ line 43 ~ user", user);
    setStore(KEY_LOGIN_ID, user.id);
    setStore(KEY_LOGIN_NAME, user.name);
    return;
}
