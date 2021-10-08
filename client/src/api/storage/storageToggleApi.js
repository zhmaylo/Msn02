
import { getStore, setStore } from './storageApi';


export const getStoreCurrent = (key) => {
    return !!JSON.parse(getStore(key));
}

export const getStoreNext = (key) => {
    let val = !JSON.parse(getStore(key));
    setStore(key, val);
    return val;
};

