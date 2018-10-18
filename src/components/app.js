import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Home from './home'
import Login from './login'

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;