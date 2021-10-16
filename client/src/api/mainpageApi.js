import { useCallback } from 'react';
import { request } from './requestApi';

//field = createdAt or rating
export const useGetTasksAndOrder = () => {
    const getTasksAndOrder = useCallback(async (field, tag) => {
        return await request(getQuery(field, tag), 'GET', null, {});
    }, [])
    return { getTasksAndOrder };
}

const getQuery = (field, tag) => {
    return (`/mainpage/sortby?field=${field}&sortby=DESC&tag=${tag}`)
}

