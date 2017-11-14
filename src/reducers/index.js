import { combineReducers } from 'redux'

import { users } from './users'
import { selectedLevel } from './selectedLevel'

const rootReducer = combineReducers({
    selectedLevel,
    users
});

export default rootReducer
