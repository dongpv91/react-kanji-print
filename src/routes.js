import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from './containers/Home'


const routes = (
    <BrowserRouter>
    <Switch>
        <Route path="/" component={Home}/>
        <Route path="/index" component={Home}/>
        {/* both /roster and /roster/:number begin with /roster */}
        {/*<Route path='/post' component={Post}/>*/}
    </Switch>
    </BrowserRouter>
);

export default routes
