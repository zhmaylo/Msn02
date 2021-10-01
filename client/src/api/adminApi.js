import { useCallback } from 'react';
import { useHttp } from './httpApi';


const setState = (setLoading, setUserList, usrList) => {
    setUserList(usrList);
    setLoading(true);
    console.log("🚀 ~ file: adminApi.js ~ line 15 ~ usrList", usrList);
}

export const useGetList = () => {
    const { request } = useHttp()
    const getList = useCallback(async (setLoading, setUserList) => {
        let usrList = await request('/admin/userlist', 'GET', null, {});
        setState (setLoading, setUserList, usrList);
    }, [request])
    return {getList}
}

// module.exports = useGetUserList;