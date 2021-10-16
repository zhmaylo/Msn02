import { useCallback } from 'react';
import { request } from './requestApi';


export const useGetTagsRequest = () => {
    const getTagsRequest = useCallback(async (amount) => {
        return await request(getQueryString(amount), 'GET', null, {});
    }, [])
    return { getTagsRequest };
}

const getQueryString = (amount) => {
    return (`/mainpage/cloudtags/${amount}`)
}