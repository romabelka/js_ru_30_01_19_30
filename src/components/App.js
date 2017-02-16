import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Filters from './Filters'
import 'react-select/dist/react-select.css'
import Counter from './Counter'
import {connect} from 'react-redux'
import {loadAllArticles} from '../AC'

class App extends Component {
    state = {
        user: ''
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        return (
            <div>
                <Counter/>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <Filters />
                <ArticleList />
            </div>
        )
    }

    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            })
        }
    }
}

App.propTypes = {
}

export default connect(null, {loadAllArticles})(App)