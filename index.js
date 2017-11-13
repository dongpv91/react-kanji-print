import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { fetchData } from './src/actions/index'
import { configureStore } from './src/store/configureStore';
import routes from './src/routes';

window.React = React; // export for http://fb.me/react-devtools

const store = configureStore();
store.dispatch(fetchData());


render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('example')
);
