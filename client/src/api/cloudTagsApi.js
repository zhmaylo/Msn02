import { useCallback } from 'react';
import { request } from './requestApi';


export const useGetTagsRequest = () => {
    const getTagsRequest = useCallback(async (field) => {
        return await request(getQueryString(), 'GET', null, {});
    }, [])
    return { getTagsRequest };
}

const getQueryString = () => {
    return ('/mainpage/cloudtags')
}