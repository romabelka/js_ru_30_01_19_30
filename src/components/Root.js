import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import store from '../store'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1>Main menu</h1>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Root