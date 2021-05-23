import 'index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import Home from 'components/Home/Home'
import Cart from 'components/Cart/Cart'
import About from 'components/About/About'
import Shop from 'components/Shop/Shop'
import ItemDetail from 'components/Shop/ItemDetail';

const App = () => {
    return (
        <Provider store={store}>
                <Router>
                    <Cart />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/shop' component={Shop} />
                        {/* <Route exact path='/shop:beginnerfriendly' component={} />
                        <Route exact path='/shop:airpurify' component={} />
                        <Route exact path='/shop:petfriendly' component={} /> */}
                        <Route exact path='/shop/:name' component={ItemDetail} />
                        {/* <Route exact path='/cart' component={Cart} /> */}
                    </Switch>
                </Router>
        </Provider>
    )
}

export default App;