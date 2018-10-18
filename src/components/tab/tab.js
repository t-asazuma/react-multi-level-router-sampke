import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Tab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {to, children, ...attributes} = this.props;
        return(
            <li><Link to={to} {...attributes}>{children}</Link></li>
        ) 
    }
}