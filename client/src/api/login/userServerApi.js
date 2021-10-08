import { request } from "../requestApi";
import { getUserIDName } from "./userStoreApi";


export const sendUserDataToServer = async (data) => {
    let user = getUserIDName(data)
    await request('/login', 'POST', { user }, {});
}
