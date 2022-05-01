import {langTheme} from "../../lang/langThemeRu";
import {CHOOSE_MODE} from "../types";


const initialState = {
    gameModes: [
        {id: '1', title: 'Party',searchName:'party', desc: langTheme.PARTY_DESC, icon: require('../../../assets/icons/party_mode.png')},
        {
            id: '2',
            title: 'Hot-Party',
            searchName: 'hot',
            desc: langTheme.HOT_PARTY_DESC,
            icon: require('../../../assets/icons/hot_party_mode.png')
        },
        {id: '3', title: 'Hard',searchName:'hard', desc: langTheme.HARD_DESC, icon: require('../../../assets/icons/hard_mode.png')},
        {
            id: '4',
            title: 'For couples',
            searchName:'couples',
            desc: langTheme.COUPLES_DESC,
            icon: require('../../../assets/icons/couples_mode.png')
        },
        {id: '5', title: 'Family',searchName:'family', desc: langTheme.FAMILY_DESC, icon: require('../../../assets/icons/famile_mode.png')}
    ],
    selectedMode: null
}

export const modeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_MODE:
            return {...state, selectedMode: state.gameModes.find(mode => mode.id === action.payload)}
        default:
            return state
    }
}