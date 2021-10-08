import { useCallback } from 'react';
import { request } from './requestApi';

//field = createdAt or rating
export const useGetTasksAndOrder = () => {
    const getTasksAndOrder = useCallback(async (field) => {
        let taskList = await request('/mainpage/sortby', 'GET', null, {"field": field});
        console.log("🚀 ~ file: mainpageApi.js ~ line 8 ~ getTasksAndOrder ~ taskList", taskList)
        return taskList;
    }, [])
    return { getTasksAndOrder };
}

