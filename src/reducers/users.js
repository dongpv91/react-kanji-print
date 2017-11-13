import * as ActionTypes from '../constants/ActionTypes';



const initialState = [];
export const users = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.RECEIVE_USER:
            return action.users;
        //case ActionTypes.CREATE_USER:
        default:
            return state;
    }
};
