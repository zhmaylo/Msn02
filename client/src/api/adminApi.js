import { useCallback } from 'react';
import { request } from './requestApi';

const setState = (setLoading, setUserList, usrList) => {
    setUserList(usrList);
    setLoading(true);
}

export const useGetList = () => {
    const getList = useCallback(async (setLoading, setUserList) => {
        let usrList = await request('/admin/userlist', 'GET', null, {});
        setState (setLoading, setUserList, usrList);
    }, [])
    return {getList}
}

