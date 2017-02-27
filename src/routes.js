import React from 'react'
import {Router, Route, hashHistory, browserHistory} from 'react-router'
import Root from './components/Root'
import ArticleList from './components/ArticleList'
import Filters from './components/Filters'
import Counter from './components/Counter'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <Route path="articles" component={ArticleList}/>
            <Route path="filters" component={Filters}/>
            <Route path="counter" component={Counter}/>
        </Route>
    </Router>
)