import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './src/configureStore';
import routes from './src/routes';

window.React = React; // export for http://fb.me/react-devtools

const store = configureStore();


render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('main')
);
