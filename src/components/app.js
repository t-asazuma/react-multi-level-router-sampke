import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './home'
import Login from './login'

class App extends React.Component {
    render() {
        console.log("aaaaa");
        console.log(this.props);
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;