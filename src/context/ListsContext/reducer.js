import { CREATE_LIST, ADD_LIST, REMOVE_LIST_ITEM } from "../actionTypes";

const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
        case CREATE_LIST: {
            const { payload: { data, value } } = action;
            return {
                ...state,
                [data]: [value]
            }
        }
        case ADD_LIST: {
            const { payload: { data, value } } = action;
            return {
                ...state,
                [data]: [...state[data], value]
            }
        }
        case REMOVE_LIST_ITEM: {
            const { payload: { data, index } } = action;
            const newList = state[data].filter((item, i) => index !== i)
            return {
                ...state,
                [data]: [...newList]
            }
        }
        default: return state
    }
}

export { reducer }