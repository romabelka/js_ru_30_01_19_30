import React, {Component} from 'react'
import Article from './Article'

export default class ArticleList extends Component {

    state = {
        openArticleId: null
    }

    render() {
        const {articles} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == this.state.openArticleId}
                toggleOpen={this.toggleOpenArticle(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            openArticleId
        })
    }
}


ArticleList.defaultProps = {
    articles: []
}