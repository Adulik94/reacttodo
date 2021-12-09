import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const ListsContext = createContext(null);

const ListsContextProvider = ({ children }) => {
    const [lists, dispatch] = useReducer(reducer, {});

    return (
        <ListsContext.Provider value={{ lists, dispatch }} >
            {children}
        </ListsContext.Provider>
    )
}

export { ListsContext, ListsContextProvider }