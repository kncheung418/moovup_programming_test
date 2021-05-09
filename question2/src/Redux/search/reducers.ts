import { SearchActions } from "./actions"

export interface SearchState{
    searchKey: string
}
const initialState = {
    searchKey: ''
}
export const searchReducer = (oldState: SearchState = initialState, action: SearchActions): SearchState => {
    switch(action.type){
        case "@@SEARCH/SET_SEARCH_KEY":
            return {...oldState, searchKey: action.searchKey}
        default:
            return oldState
    }
}