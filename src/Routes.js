import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App'
import About from './About'
import Shop from './Shop'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/about' component={About} />
                <Route exact path='/shop' component={Shop} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;