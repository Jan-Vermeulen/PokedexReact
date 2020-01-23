//@ts-nocheck

import { createStore, compose } from 'redux'
import commonReducer from './state/reducers'

const initialState = { locale: 'fr', searchText: '' }

export default createStore(
    commonReducer,
    initialState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
