import React, {Component, PropTypes} from 'react'
import Article from './Article/index'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {filteredArticlesSelector} from '../selectors'
import Loader from './Loader'

class ArticleList extends Component {
    render() {
        const {articles, loading, toggleOpenItem, isOpenItem} = this.props
        console.log('---', 2)

        if (loading) {
            return <Loader/>
        }

        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={isOpenItem(article.id)}
                toggleOpen={toggleOpenItem(article.id)}/>
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
    }
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