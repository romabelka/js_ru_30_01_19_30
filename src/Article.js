import React, {Component} from 'react'
import CommentList from './CommentList'


export default class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {article} = this.props
        const {comments} = article
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
                <CommentList comments={comments}></CommentList>
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <section>
                {this.props.article.text}
            </section>

        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}