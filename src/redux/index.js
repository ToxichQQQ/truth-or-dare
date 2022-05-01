import {createStore,combineReducers} from "redux";
import {playerReducer} from "./players/reducer";
import { modeReducer} from "./gamemode/reducer";
import {gameReducer} from "./game/reducer";

const rootReducer = combineReducers({
    player:playerReducer,
    mode:modeReducer,
    game:gameReducer
})


export const store = createStore(rootReducer)