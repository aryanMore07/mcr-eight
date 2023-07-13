import { createContext, useReducer } from "react";
import { meetUpData } from "../data/data";
import { reducerFunction } from "../reducers/reducerFuction";

export const DataContext = createContext();

const initialState = {
    data: meetUpData,
    searchInput: '',
}

export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFunction, initialState)

    const searchedData = state.searchInput ? state.data.meetups.filter(({ title, eventTags }) => title.includes(state.searchInput) && eventTags.map((tag) => tag.includes(state.searchInput))) : state.data.meetups;

    return <DataContext.Provider value={{ state, dispatch, searchedData }}>{children}</DataContext.Provider>
}
