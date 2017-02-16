import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import Filters from './Filters'
import 'react-select/dist/react-select.css'
import Counter from './Counter'
import {connect} from 'react-redux'

class App extends Component {
    state = {
        user: ''
    }

    render() {
        const {articles} = this.props
        return (
            <div>
                <Counter/>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <Filters />
                <ArticleList />
                <Chart articles={articles}/>
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
    articles: PropTypes.array.isRequired
}

export default connect(state => ({
    articles: state.articles
}))(App)