import { useCallback } from "react"
const message = require('../const/message.json')

export const useHttp = () => {
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            const response = await getRequest(url, method, body, headers);
            const data = await response.json()
            console.log('🚀 ~ file: httpApi.js ~ line 15 ~ request ~ data', data);
            isResponseFail(response.ok, data);
            return data;
        }
        catch (e) { throw e }
    }, [])
    return { request }
}

const isResponseFail = (res, data) => {
    if (!res) {
        throw new Error(data.message || message.somethingWentWrong)
    }
}

const getRequest = async (url, method, body, headers) => {
    let data = getBodyHead(body, headers);
    body = data.body;
    headers = data.headers;
    return (await fetch(url, { method, body, headers }))
}

const getBodyHead = (body, headers) => {
    if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
    }
    return { body, headers }
}

