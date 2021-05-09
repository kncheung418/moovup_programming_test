import { ThunkDispatch, RootState } from "../../store";
import { fetchPeopleAction } from "./actions";

export function fetchPeople(){
    return async (dispatch: ThunkDispatch, getState:()=>RootState)=>{
        const result = await fetch('https://next.json-generator.com/api/json/get/41P1_UhSI')
        const resultJson = await result.json();
        dispatch(fetchPeopleAction(resultJson))
    }
}