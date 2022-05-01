import {GET_RANDOM_ACTION, GET_RANDOM_QUESTION} from "../types";

export const actionGetQuestion = (category) => {
    return {type:GET_RANDOM_QUESTION,payload:category}
}

export const actionGetAction = (category) => {
    return {type:GET_RANDOM_ACTION,payload:category}
}