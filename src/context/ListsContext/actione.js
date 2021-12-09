import { CREATE_LIST, ADD_LIST, REMOVE_LIST_ITEM } from "../actionTypes"

export const createList = (data, value) => {
    return {
        type: CREATE_LIST,
        payload: {
            data: data,
            value: value
        }
    }
}

export const addList = (data, value) => {
    return {
        type: ADD_LIST,
        payload: {
            data: data,
            value: value
        }
    }
}

export const deleteListItem = (data, index) => {
    return {
        type: REMOVE_LIST_ITEM,
        payload: {
            data: data,
            index: index
        }
    }
}