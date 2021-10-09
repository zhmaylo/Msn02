
const message = require('../const/message.json')

export const request = (async (url, method = 'GET', body = null, headers = {}) => {
    try {
        const response = await getRequest(url, method, body, headers);
        // console.log("🚀 ~ file: requestApi.js ~ line 7 ~ response", response);
        const data = await response.json()
        isResponseFail(response.ok, data);
        return data;
    }
    catch (e) { throw e }
})

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

