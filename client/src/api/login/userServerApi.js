import { request } from "../requestApi";
import { getUserIDName } from "./userStoreApi";


export const sendUserDataToServer = async (data) => {
    // console.log("🚀 ~ file: loginApi.js ~ line 39 ~ user", user);
    let user = getUserIDName(data)
    await request('/login', 'POST', { user }, {});
}
