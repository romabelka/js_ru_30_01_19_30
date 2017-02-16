import React, { PropTypes } from 'react'
import {connect} from 'react-redux'

function Comment(props) {
    const {text, user} = props.comment
    return (
        <div>
            {text}
            {user && <b> by {user}</b>}
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

export default connect((state, props) => {
    const {id} = props
    const comment = state.comments[id]
    return { comment }
})(Comment)