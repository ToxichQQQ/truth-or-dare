import {GET_RANDOM_ACTION, GET_RANDOM_QUESTION, REFRESH_ITEM} from "../types";

const initialState = {
    questions: [
        {title: 'Был ли у вас в семье инцест? Если да, то расскажите подробнее', categories: ['family', 'hot']},
        {title: 'Какого это быть шлюхой?', categories: ['hard', 'hot']},
        {title: 'Любишь детей?', categories: ['family']},
        {title: 'Отсосала бы Зауру?', categories: ['hot']},
        {title: 'Отсосала бы Антону?', categories: ['hot']},
        {title: 'Отсосала бы Ивану?', categories: ['hot']}

    ],
    actions: [],
    selectedItem: {categories:['family','hot'],title:'  слова начинающиеся с первой буквы твоего имени'},
    selectedAction: null
}

const arrayRandElement = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}


export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RANDOM_QUESTION:
            const filterQuestionArray = state.questions.filter(question => question.categories.includes(action.payload))
            return {...state, selectedAction: 'questions', selectedItem: arrayRandElement(filterQuestionArray)}
        case GET_RANDOM_ACTION:
            const filterActionArray = state.questions.filter(question => question.categories.includes(action.payload))
            return {...state, selectedAction: 'action', selectedItem: arrayRandElement(filterActionArray)}
        case REFRESH_ITEM:
            const refreshArray = state.selectedAction === 'question' ? state.questions.filter(question => question.categories.includes(action.payload)) : state.questions.filter(question => question.categories.includes(action.payload))
            return {...state, selectedItem: arrayRandElement(refreshArray)}
        default:
            return {...state}
    }
}