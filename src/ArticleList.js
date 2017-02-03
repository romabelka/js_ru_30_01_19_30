import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
    const {articles} = props
    const articleElements = articles.map(
    	(article) => 
	    	<li key={article.id}>
	        <Article article={article} defaultOpen={true}/>
    </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}