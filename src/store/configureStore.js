import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension  ? window.devToolsExtension () : undefined);

    return store;
}