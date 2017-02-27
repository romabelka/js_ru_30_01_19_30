import React from 'react'
import {Router, Route, hashHistory, browserHistory} from 'react-router'
import Root from './components/Root'

export default (
    <Router history={browserHistory}>
        <Route path="/app" component={Root}/>
    </Router>
)