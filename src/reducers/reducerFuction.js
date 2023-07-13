export const reducerFunction = (state, action) => {
    switch (action.type) {
        case "SEARCH_INPUT":
            return {
                ...state, searchInput: action.payload
            }
        case "DROPDOWN_INPUT":
            return {
                ...state, dropDownInput: action.payload
            }
        case "UPDATE_DATA":
            return {
                ...state, data: action.payload
            }
        default:
            return state
    }
}