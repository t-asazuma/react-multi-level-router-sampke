import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import User from './user';
import About from './about';

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        console.log("home");
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/user" component={User} />
                    <Route exact path="/" component={User} />
                    <Route component={About} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Home;