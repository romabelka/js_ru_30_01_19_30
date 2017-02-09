import React, { PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'

function App(props) {
    const {articles} = props
    return (
        <div>
            <ArticleList articles={articles} />
            <Chart articles={articles} />
        </div>
    )
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default App