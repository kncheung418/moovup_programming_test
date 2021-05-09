import { IPeopleInformation } from "../../models/IPeople"

export function fetchPeopleAction(people:IPeopleInformation[]){
    return {
        type: "@@PEOPLE/LOADED_PEOPLE" as "@@PEOPLE/LOADED_PEOPLE",
        people
    }
}

export type PeopleActions = ReturnType<typeof fetchPeopleAction>