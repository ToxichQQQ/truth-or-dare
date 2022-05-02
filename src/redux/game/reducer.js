import {GET_RANDOM_ACTION, GET_RANDOM_QUESTION, REFRESH_ITEM} from "../types";
import {actionData, questionsData} from "../../data";

const initialState = {
    questions: questionsData,
    actions: actionData,
    selectedItem: null,
    selectedAction: null
}

const arrayRandElement = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}


export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RANDOM_QUESTION:
            const filterQuestionArray = state.questions.filter(question => question.categories.includes(action.payload.category))
            let randomQuestion = arrayRandElement(filterQuestionArray)
            if (!randomQuestion.single) {
                let randomPlayer = arrayRandElement(action.payload.players)
                while (randomPlayer === action.payload.player) {
                    randomPlayer = arrayRandElement(action.payload.players)
                }
                randomQuestion = {
                    ...randomQuestion,
                    title: randomQuestion.title.replace('playerName', randomPlayer.name)
                }
            }
            return {...state, selectedAction: 'question', selectedItem: randomQuestion}
        case GET_RANDOM_ACTION:
            const filterActionsArray = state.actions.filter(question => question.categories.includes(action.payload.category))
            let randomAction = arrayRandElement(filterActionsArray)
            if (!randomAction.single) {
                let randomPlayer = arrayRandElement(action.payload.players)
                while (randomPlayer === action.payload.player) {
                    randomPlayer = arrayRandElement(action.payload.players)
                }
                randomAction = {...randomAction, title: randomAction.title.replace('playerName', randomPlayer.name)}
            }
            return {...state, selectedAction: 'action', selectedItem: randomAction}
        case REFRESH_ITEM:
            const refreshArray = state.selectedAction === 'question' ? state.questions.filter(question => question.categories.includes(action.payload.category)) : state.actions.filter(question => question.categories.includes(action.payload.category))
            let randomItem = arrayRandElement(refreshArray)
            if (!randomItem.single) {
                let randomPlayer = arrayRandElement(action.payload.players)
                while (randomPlayer === action.payload.player) {
                    randomPlayer = arrayRandElement(action.payload.players)
                }

                randomItem = {...randomItem, title: randomItem.title.replace('playerName', randomPlayer.name)}
            }

            return {...state, selectedAction: 'action', selectedItem: randomItem}
        default:
            return {...state}
    }
}