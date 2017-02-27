import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'
import {loadAllArticles} from '../../AC'
import {connect} from 'react-redux'

class Filters extends Component {
    static propTypes = {
    }
    componentDidMount() {
        const { articles, loadAllArticles } = this.props
        if (!articles.size) loadAllArticles()
    }

    render() {
        return (
            <div>
                <ArticlesSelect/>
                <DateRange/>
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles.entities
}), {loadAllArticles})(Filters)