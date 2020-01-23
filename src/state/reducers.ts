//@ts-nocheck
import { SET_LOCALE } from './actions'
import { SET_SEARCH_TEXT } from './actions'

export default function commonReducer(state, action) {
    switch (action.type) {
        case 'INITIAL_STATE':
            return {
                ...state,
                ready: action.payload,
            }
        case SET_LOCALE:
            return {
                ...state,
                locale: action.payload,
            }
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            }
        default:
            return state
    }
}
