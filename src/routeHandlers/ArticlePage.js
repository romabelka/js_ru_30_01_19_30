import React, { Component, PropTypes } from 'react'
import Article from '../components/Article'

class ArticlePage extends Component {
    static propTypes = {

    };

    render() {
        return <Article isOpen={true} id={this.props.params.id} key={this.props.params.id}/>
    }
}

export default ArticlePage