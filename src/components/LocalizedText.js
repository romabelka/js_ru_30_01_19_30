import React, { PropTypes } from 'react'

function LocalizedText(props, context) {
    return (
        <span>{context.dictionary[props.text] || props.text}</span>
    )
}

LocalizedText.propTypes = {
    text: PropTypes.string.isRequired
}

LocalizedText.contextTypes = {
    dictionary: PropTypes.object.isRequired
}

export default LocalizedText