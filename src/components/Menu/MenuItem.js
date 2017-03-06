import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class MenuItem extends Component {
    static propTypes = {
        path: PropTypes.string.isRequired
    };

    render() {
        const {path} = this.props
        return (
            <div>
                <Link to={path} activeStyle={{color: 'red'}}>{path}</Link>
            </div>
        )
    }
}

export default MenuItem