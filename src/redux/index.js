import {createStore,combineReducers} from "redux";
import {playerReducer} from "./players/reducer";

const rootReducer = combineReducers({
    player:playerReducer
})


export const store = createStore(rootReducer)