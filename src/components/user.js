import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class User extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        console.log("test");
        return (
            <div>user</div>
        );
    }
}

export default User;