import { PeopleActions } from "./Redux/people/actions";
import thunk, { ThunkDispatch as OldThunkDispatch} from 'redux-thunk'
import { PeopleState, peopleReducer } from "./Redux/people/reducers";
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import { RouterState, connectRouter, routerMiddleware } from 'connected-react-router';
import { SearchState, searchReducer } from "./Redux/search/reducers";
import { SearchActions } from "./Redux/search/actions";

  
export type RootAction = PeopleActions | SearchActions
export interface RootState {
    people: PeopleState
    search: SearchState
    router: RouterState
}
export const history = createBrowserHistory();

const reducer = combineReducers<RootState>({
    people: peopleReducer,
    search: searchReducer,
    router: connectRouter(history),
})
export type ThunkDispatch = OldThunkDispatch<RootState, null, RootAction>

const composeEnhancers = compose
export const store = createStore(reducer,
    composeEnhancers(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
    ));
  
