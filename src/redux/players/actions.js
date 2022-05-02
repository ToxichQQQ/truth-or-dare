import {ADD_NEW_PLAYER, DELETE_PLAYER, GET_RANDOM_PLAYER} from "../types";

export const actionAddNewPlayer = (name,isMale) => {
    return {type:ADD_NEW_PLAYER,payload:{name,isMale}}
}

export const actionDeletePlayer = (id) => {
    return {type:DELETE_PLAYER,payload:id}
}

export const actionGetRandomPlayer = () => {
    return {type:GET_RANDOM_PLAYER}
}