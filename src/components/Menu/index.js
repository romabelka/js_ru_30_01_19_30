import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'
import LocalizedText from '../LocalizedText'
export {MenuItem}

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2><LocalizedText text="Select path"/>:</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Menu