import React from 'react'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import App from './components/App'
import About from './components/About'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Footer from './components/Footer'

const Routes = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/about' component={About} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/cart' component={Cart} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routes;