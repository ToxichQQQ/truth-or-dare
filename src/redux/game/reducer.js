import {GET_RANDOM_ACTION, GET_RANDOM_QUESTION} from "../types";

const initialState = {
    questions:[
        {title:'Sex',categories:['family','hot']},
        {title:'Minet',categories:['hard','hot']},
        {title:'All',categories:['family']},
        {title:'Boobs',categories:['hot']}

    ],
    actions:[],
    selectedItem:null
}

const arrayRandElement = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}


export const gameReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_RANDOM_QUESTION:
            const filterQuestionArray = state.questions.filter(question => question.categories.includes(action.payload))
           return {...state,selectedItem: arrayRandElement(filterQuestionArray)}
        case GET_RANDOM_ACTION:
            const filterActionArray = state.questions.filter(question => question.categories.includes(action.payload))
            return {...state,selectedItem: arrayRandElement(filterActionArray)}
        default:
            return {...state}
    }
}