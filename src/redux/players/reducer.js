import {ADD_NEW_PLAYER, DELETE_PLAYER, GET_RANDOM_PLAYER} from "../types";
import uuid from 'react-native-uuid';

const initialState = {
    players: [
        {id: '1', name: 'Антон', isMale: true},
        {id: '2', name: 'Саша', isMale: false},
        {id: '3', name: 'Лера', isMale: false},
        {id: '4', name: 'Вероника', isMale: false}
    ],
    currentPlayer: null
}

const arrayRandElement = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_PLAYER:
            return {...state,players: [{id: uuid.v4(),name:action.payload.name,isMale: action.payload.isMale},...state.players]}
        case DELETE_PLAYER:
            return {...state,players: state.players.filter(player => player.id !== action.payload)}
        case GET_RANDOM_PLAYER:
            const randomPlayer = arrayRandElement(state.players)
            return {...state,currentPlayer: randomPlayer}
        default:
            return state
    }
}