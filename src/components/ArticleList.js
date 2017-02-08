import React, {Component} from 'react'
import Article from './Article'
import toggleOpen from '../decorators/toggleOpen'

function ArticleList (props) {

    const {articles, toggleOpenArticle} = props
    const articleElements = articles.map((article) => <li key={article.id}>
        <Article
            article={article}
            isOpen={article.id == state.openArticleId}
            toggleOpen={toggleOpenArticle(article.id)}/>
    </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )

}


ArticleList.defaultProps = {
    articles: []
}

export default toggleOpen(ArticleList)