import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import App from './App'
import store from '../store'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Root