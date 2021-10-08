

export const getStore = (key) => { return (localStorage.getItem(key)) }

export const setStore = (key, val) => { return localStorage.setItem(key, val) }

