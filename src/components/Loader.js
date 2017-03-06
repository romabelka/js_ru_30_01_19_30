import React, { PropTypes } from 'react'
import LocalizedText from './LocalizedText'

function Loader(props) {
    return (
        <h2><LocalizedText text="Loading"/>...</h2>
    )
}

Loader.propTypes = {
}

export default Loader