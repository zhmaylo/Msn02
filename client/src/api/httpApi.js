import { useCallback } from "react"
const message = require('../const/message.json')

export const useHttp = () => {
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        // console.log("🚀 ~ file: http.hook.js ~ line 6 ~ body", body);
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, { method, body, headers })
            console.log("🚀 ~ file: http.hook.js ~ line 12 ~ response", response);
            const data = await response.json()
            console.log("🚀 ~ file: http.hook.js ~ line 14 ~ data", data);
            if (!response.ok) {
                throw new Error(data.message || message.somethingWentWrong)
            }
            return data;
        }
        catch (e) {
            throw e
        }
    }, [])
    return { request }
}