import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import Sci from './Pages/Sci';
import Programming from './Pages/Programming';
import Sports from './Pages/Sports';
import Navigation from './Widgets/Navigation';

const App = () => {
    return <div>

<Router>
        <Navigation />
        <Route exact={true} path="/" component={Home} />
        <Route path="/sci" component={Sci} />
        <Route path="/programming" component={Programming} />
        <Route path="/sports" component={Sports} />
        <Route path="/lol" render={
            () => {
                return <div>
                    <p>Lol this is stupid</p>
                </div>
            }
        } />
    </Router>
    </div>
}

const app = document.querySelector('#app');
ReactDOM.render(<App />, app);