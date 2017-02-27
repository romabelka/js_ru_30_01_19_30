import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'
export {MenuItem}

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Main menu:</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Menu