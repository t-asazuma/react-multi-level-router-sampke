import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import User from './user';
import About from './about';
import Tab from './tab/tab';

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <Tab to="/user">HOME</Tab>
                <Tab to="/about">about</Tab>
                <div>
                    <Switch>
                        <Route exact path="/user" component={User} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;