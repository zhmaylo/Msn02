import { useCallback } from 'react';
import { request } from './requestApi';

export const useGetTasksOfUser = () => {
    const getTasksOfUser = useCallback(async (id) => {
        let taskList = await request(`/userpage/${id}`, 'GET', null, {});
        taskList = checkTaskList(taskList);
        return taskList;
    }, [])
    return { getTasksOfUser };
}

const checkTaskList = (taskList) => {
    return (taskList.length === undefined ? [] : taskList) 
}