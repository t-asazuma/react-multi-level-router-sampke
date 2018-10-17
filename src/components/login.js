import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        console.log("login");
        return (<div>login</div>);
    }
}

export default Login;