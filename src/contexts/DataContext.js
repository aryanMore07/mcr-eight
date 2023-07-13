import { createContext, useReducer } from "react";
import { meetUpData } from "../data/data";
import { reducerFunction } from "../reducers/reducerFuction";

export const DataContext = createContext();

const initialState = {
    data: meetUpData
}

export const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducerFunction, initialState)

    return <DataContext.Provider value={{state, dispatch}}>{children}</DataContext.Provider>
}
