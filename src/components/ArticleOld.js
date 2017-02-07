import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'
import toggleOpen from '../mixins/toggleOpen'

export default React.createClass({
    mixins: [toggleOpen],
    propTypes: {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired
    },

    componentWillMount() {
    },

    componentDidMount() {
    },

    render() {
        const {article} = this.props
        return (
            <div>
                <h3 onClick={this.toggleOpen}>{article.title}</h3>
                {this.getBody()}
                <h2 onClick = {() => this.setState({})}>click me</h2>
            </div>
        )
    },

    getBody() {
        if (!this.state.isOpen) return null
        const {text, comments} = this.props.article

        return (
            <section>
                {text}
                <CommentList comments={comments}/>
            </section>
        )
    }
})