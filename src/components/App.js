import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import Select from 'react-select'
import DateRange from './DateRange'
import 'react-select/dist/react-select.css'
import Counter from './Counter'
import {connect} from 'react-redux'

class App extends Component {
    state = {
        user: '',
        selection: null
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter/>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <Select options = {options} onChange={this.handleSelectChange} value={this.state.selection} multi/>
                <DateRange />
                <ArticleList articles={articles}/>
                <Chart articles={articles}/>
            </div>
        )
    }

    handleSelectChange = selection => this.setState({ selection })

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