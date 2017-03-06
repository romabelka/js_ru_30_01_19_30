import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import { loadCommentsForPage } from '../AC'
import Loader from './Loader'

class CommentsPage extends Component {
    static propTypes = {
        page: PropTypes.number.isRequired,
        //From redux connect:
        pageIds: PropTypes.object,
        total: PropTypes.number
    };

    componentDidMount() { checkAndLoad(this.props) }

    componentWillReceiveProps = checkAndLoad

    render() {
        const { total, pageIds, page } = this.props
        if (!total) return <Loader />
        if ( (page - 1) * 5 >= total ) return <h3>No comments for this page</h3>
        if (!pageIds || !pageIds.size) return <Loader />

        const commentItems = pageIds.map(id => <li key = {id}><Comment id = {id} /></li>)
        return (
            <ul>
                {commentItems}
            </ul>
        )
    }
}

function checkAndLoad(props) {
    const { page, pageIds, loadCommentsForPage } = props
    if (!pageIds) loadCommentsForPage(page)
}

export default connect((state, props) => {
    const pageIds = state.comments.getIn(['pagination', props.page])
    const total = state.comments.total
    return { pageIds, total }
}, { loadCommentsForPage })(CommentsPage)
