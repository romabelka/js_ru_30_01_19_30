import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'

class ArticleListPage extends Component {
    static propTypes = {

    };

    render() {
        return <div>
            <ArticleList />
            {this.props.children}
        </div>
    }
}

export default ArticleListPage