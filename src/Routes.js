import React from 'react'
import 'index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from 'components/Home/App'
import About from 'components/About/About'
import Shop from 'components/Shop/Shop'
import Cart from 'components/Cart/Cart'
import ItemDetail from 'components/Shop/ItemDetail';

const Routes = () => {
    return (
        <Router>
            <Cart />
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/about' component={About} />
                <Route exact path='/shop' component={Shop} />
                {/* <Route exact path='/shop:beginnerfriendly' component={} />
                <Route exact path='/shop:airpurify' component={} />
                <Route exact path='/shop:petfriendly' component={} /> */}
                <Route exact path='/shop/:name' component={ItemDetail} />
                {/* <Route exact path='/cart' component={Cart} /> */}
            </Switch>
        </Router>
    )
}

export default Routes;