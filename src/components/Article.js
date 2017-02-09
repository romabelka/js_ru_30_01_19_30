import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {article, toggleOpen} = this.props
        return (
            <div ref = {this.getContainerRef}>
                <h3 onClick={toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
    }

    getCommentsRef = (ref) => {
        this.commentList = ref
        console.log('---', ref.state.isOpen, findDOMNode(ref))
    }

    getBody() {
        const {isOpen, article: {text, comments}} = this.props
        if (!isOpen) return null

        return (
            <section>
                {text}
                <CommentList comments={comments} ref = {this.getCommentsRef} />
            </section>
        )
    }
}

export default Article