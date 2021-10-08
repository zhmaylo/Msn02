import { useCallback } from 'react';
import { request } from './requestApi';

export const useGetTasksOfUser = () => {
    const getTasksOfUser = useCallback(async (id) => {
        let taskList = await request(`/userpage/${id}`, 'GET', null, {});
        console.log("🚀 ~ file: userpageApi.js ~ line 8 ~ getTasksOfUser ~ taskList", taskList)
        return taskList;
    }, [])
    return { getTasksOfUser };
}

