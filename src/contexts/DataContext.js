import { createContext, useReducer } from "react";
import { meetUpData } from "../data/data";
import { reducerFunction } from "../reducers/reducerFuction";

export const DataContext = createContext();

const initialState = {
    data: meetUpData.meetups,
    searchInput: '',
    dropDownInput: ''
}

export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFunction, initialState)

    const searchedData = state.searchInput ? state.data.filter(({ title, eventTags }) => title.includes(state.searchInput) && eventTags.map((tag) => tag.includes(state.searchInput))) : state.data;

    const dropdownFilter = state.dropDownInput ? 
    state.dropDownInput === 'both' ? searchedData :  searchedData.filter(({eventType}) => eventType === state.dropDownInput) : searchedData;

    console.log(state.data)

    return <DataContext.Provider value={{ state, dispatch, dropdownFilter }}>{children}</DataContext.Provider>
}
