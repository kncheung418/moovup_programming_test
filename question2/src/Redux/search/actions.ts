export function setSearchKey(searchKey:string){
    return{
        type: "@@SEARCH/SET_SEARCH_KEY" as "@@SEARCH/SET_SEARCH_KEY",
        searchKey
    }
}

export type SearchActions = ReturnType<typeof setSearchKey>