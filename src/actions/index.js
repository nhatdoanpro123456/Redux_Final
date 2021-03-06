import * as types from '../constants/ActionTypes';

export const showDialog = () => {
    return {
        type: types.SHOW_DIALOG
    }
}

// export const getTask = () => {
//     return {
//         type: types.GET_TASK
//     }
// }
export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task: task
    }
}
export const delTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}
export const updateTask = (task) => {
    return {
        type: types.UPDATE_TASK,
        task
    }
}