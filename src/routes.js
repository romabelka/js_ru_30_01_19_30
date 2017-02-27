import React from 'react'
import {Router, Route, hashHistory, browserHistory} from 'react-router'
import Root from './components/Root'
import ArticleList from './routeHandlers/ArticleList'
import Filters from './routeHandlers/Filters'
import Counter from './routeHandlers/Counter'
import ArticlePage from './routeHandlers/ArticlePage'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <Route path="articles" component={ArticleList}>
                <Route path=":id" component={ArticlePage} />
            </Route>
            <Route path="filters" component={Filters}/>
            <Route path="counter" component={Counter}/>
        </Route>
    </Router>
)