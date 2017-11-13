import { combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import { users } from './users'

const rootReducer = combineReducers({
    routing: routerReducer,
    users
});

export default rootReducer
