import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension  ? window.devToolsExtension () : undefined);

    return store;
}