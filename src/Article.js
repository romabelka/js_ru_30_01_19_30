import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }
*/

    state = {
        isOpen: false
    };

    render() {
        const {article} = this.props;
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}

            </div>
        )
    }

    getBody(article) {
        if (!this.state.isOpen) return null;

        return (
            <section>
                {this.props.article.text}
                <CommentList comments={this.props.article.comments} />
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}