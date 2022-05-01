import {GET_RANDOM_ACTION, GET_RANDOM_QUESTION, REFRESH_ITEM} from "../types";

export const actionGetQuestion = (category) => {
    return {type:GET_RANDOM_QUESTION,payload:category}
}

export const actionGetAction = (category) => {
    return {type:GET_RANDOM_ACTION,payload:category}
}

export const actionRefreshItem = (category) => {
    return {type:REFRESH_ITEM,payload:category}
}