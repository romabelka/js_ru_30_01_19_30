import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import Menu, {MenuItem} from './Menu'
import Switcher from '../components/Switcher'
import dictionaries from '../dictionaries'

class Root extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        language: 'en'
    }

    static childContextTypes = {
        user: PropTypes.string,
        dictionary: PropTypes.object
    }

    getChildContext() {
        return {
            user: this.state.user,
            dictionary: dictionaries[this.state.language]
        }
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Switcher items = {['ru', 'en']} onChange={this.changeLang} active = {this.state.language}/>
                    <input value={this.state.user} onChange={this.handleUserChange} />
                    <Menu>
                        <MenuItem path="/articles" />
                        <MenuItem path="/filters" />
                        <MenuItem path="/counter" />
                        <MenuItem path="/comments/1" />
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleUserChange = ev => {
        this.setState({
            user: ev.target.value
        })
    }

    changeLang = (language) => this.setState({ language })
}

export default Root