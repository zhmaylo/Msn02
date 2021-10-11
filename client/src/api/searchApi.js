import { useCallback } from 'react';
import { request } from './requestApi';



export const debounce = (func, wait = 1000, immediate) => {

	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export const useGetSearchResult = () => {
    const getSearchResult =  useCallback(async (data) => {
        console.log("🚀 ~ file: searchApi.js ~ line 23 ~ data", data);
        let searchRes = await request(`/search?search=${data}`, 'GET', null, {});
        console.log("🚀 ~ file: searchApi.js ~ line 26 ~ searchRes", searchRes);
    }, []);
    return { getSearchResult }
}

