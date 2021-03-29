import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App'
import About from './About'
import Shop from './Shop'
import Cart from './Cart'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/about' component={About} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/cart' component={Cart} />
            </Switch>
        </Router>
    )
}

export default Routes;