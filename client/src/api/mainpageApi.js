import { useCallback } from 'react';
import { request } from './requestApi';

//field = createdAt or rating
export const useGetTasksAndOrder = () => {
    const getTasksAndOrder = useCallback(async (field) => {
        return  await request(getQueryString(field), 'GET', null, {});
    }, [])
    return { getTasksAndOrder };
}

const getQueryString = (field) => {
    return `/mainpage/sortby?field=${field}&sortby=DESC`
}