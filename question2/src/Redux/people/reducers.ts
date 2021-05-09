import { IPeopleInformation } from "../../models/IPeople";
import { PeopleActions } from "./actions";

export interface PeopleState {
    people: {
        [id: string]: IPeopleInformation
    }
}

const initialState: PeopleState = {
    people:{}
}

export const peopleReducer = (oldState: PeopleState = initialState, action: PeopleActions): PeopleState => {

    switch(action.type){
        case "@@PEOPLE/LOADED_PEOPLE" :
            const newPeople = {...oldState.people}
            for (const person of action.people){
                newPeople[person['_id']] = person
            }
            return {...oldState, people: newPeople}
        default:
            return oldState
    }
}