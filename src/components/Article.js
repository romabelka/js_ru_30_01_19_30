import React, {Component} from 'react'
import CommentList from './CommentList'
import checkingTypes from '../decorators/checkingTypes'

function Article(props) {


    const {article, toggleOpen, openArticleId} = props
    return (
        <div>
            <h3 onClick={toggleOpen}>{article.title}</h3>
            {getBody()}
        </div>
    )


    function getBody() {
        const {isOpen, article: {text, comments}} = props
        if (!isOpen) return null
        return (
            <section>
                {text}
                <CommentList comments={comments}/>
            </section>
        )
    }
}

export default checkingTypes(Article)