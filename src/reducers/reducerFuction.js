export const reducerFunction = (state, action) => {
    switch (action.type) {
        case "SEARCH_INPUT":
            return {
                ...state, searchInput: action.payload
            }
        default:
            return state
    }
}