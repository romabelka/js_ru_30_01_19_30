import React, { Component, PropTypes } from 'react'
import LocalizedText from '../components/LocalizedText'

class ArticleIndexPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1><LocalizedText text="Select Article"/></h1>
            </div>
        )
    }
}

export default ArticleIndexPage