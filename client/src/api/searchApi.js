import { useCallback } from 'react';
import { request } from './requestApi';

export const debounce = (func, wait = 1000) => {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			func.apply(context, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

export const useGetSearchResult = () => {
	const getSearchResult = useCallback(async (data) => {
		let searchRes = await request(`/search?search=${data}`, 'GET', null, {});
		return searchRes;
	}, []);
	return { getSearchResult }
}

