import {GET_RANDOM_ACTION, GET_RANDOM_QUESTION, REFRESH_ITEM} from "../types";

export const actionGetQuestion = (category,players,player) => {
    return {type:GET_RANDOM_QUESTION,payload:{category,players,player}}
}

export const actionGetAction = (category,players,player) => {
    return {type:GET_RANDOM_ACTION,payload:{category,players,player}}
}

export const actionRefreshItem = (category,players,player) => {
    return {type:REFRESH_ITEM,payload:{category,players,player}}
}