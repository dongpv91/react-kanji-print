import { SELECT_LEVEL } from './actionTypes'

const initialState = 5;
export const selectedLevel = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_LEVEL:
            return action.level;
        default:
            return state;
    }
};