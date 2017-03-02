import React from 'react'
import {Router, Route, IndexRoute, Redirect, IndexRedirect, hashHistory, browserHistory} from 'react-router'
import Root from './components/Root'
import ArticleList from './routeHandlers/ArticleList'
import Filters from './routeHandlers/Filters'
import Counter from './routeHandlers/Counter'
import ArticlePage from './routeHandlers/ArticlePage'
import NotFoundPage from './routeHandlers/NotFoundPage'
import AuthorizedOnlyPage from './routeHandlers/AuthorizedOnlyPage'
import ErrorPage from './routeHandlers/ErrorPage'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'
import NewArticle from './RouteHandlers/NewArticle'
import ArticleIndexPage from './RouteHandlers/ArticleIndexPage'
import store from './store'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <IndexRedirect to="/articles"/>
            <Route path="articles" component={ArticleList}>
                <IndexRoute component={ArticleIndexPage}/>
                <Route path="/new" component={NewArticle} />
                <Route path=":id" component={ArticlePage} />
            </Route>
            <Route path="filters" component={Filters}/>
            <Route path="counter" component={Counter}/>
            <Route path="admin" component={AuthorizedOnlyPage}
                onEnter={(routeState, replace) => {
                    if (!store.getState().user) {
                        replace('/error')
                    }
                    }
                }
            />
            <Redirect from="comments" to="comments/1"/>
            <Route path = "comments" component = {CommentsRoot}>
{/*
                <IndexRedirect to="1" />
*/}
                <Route path = ":page" component = {CommentsPage} />
            </Route>
            <Route path="error" component={ErrorPage} />
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
)