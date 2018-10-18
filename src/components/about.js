import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        console.log("about");
        return (
            <div>about</div>
        );
    }
}

export default About;