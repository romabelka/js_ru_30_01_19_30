import React, {Component, PropTypes} from 'react'
import Article from './Article/index'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {filteredArticlesSelector} from '../selectors'
import Loader from './Loader'
import {loadAllArticles} from '../AC'
import {Link} from 'react-router'
import LocalizedText from './LocalizedText'

class ArticleList extends Component {
    componentDidMount() {
        const { articles, loadAllArticles } = this.props
        if (!articles.length) loadAllArticles()
    }

    render() {
        const {articles, loading, toggleOpenItem, isOpenItem} = this.props

        if (loading) {
            return <Loader/>
        }

        const articleElements = articles.map((article) => <li key={article.id}>
            <Link to={`/articles/${article.id}`} activeStyle={{color: 'red'}}>{article.title}</Link>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(
    (state) => {
        return {
            articles: filteredArticlesSelector(state),
            loading: state.articles.isLoading
        }
    }, { loadAllArticles }
)(accordion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}

ArticleList.defaultProps = {
    articles: []
}