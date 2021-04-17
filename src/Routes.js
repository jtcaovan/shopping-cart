import React from 'react'
import 'index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Nav/Header'
import App from 'components/Home/App'
import About from 'components/About/About'
import Shop from 'components/Shop/Shop'
import Cart from 'components/Cart/Cart'
import Footer from 'components/Footer/Footer'

const Routes = () => {
    return (
        <Router>
            <Header />
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