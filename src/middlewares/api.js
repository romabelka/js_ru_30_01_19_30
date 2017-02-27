import $ from 'jquery'
import {START, SUCCESS, FAIL} from '../constants'
import {browserHistory} from 'react-router'

export default store => next => action => {
    if (!action.callAPI) return next(action)
    const {callAPI, type, ...rest} = action

    next({...rest, type: type + START})

    //dev only, no need in prod!!!!!
    setTimeout(() => {
        $.get(callAPI)
            .done(response => next({...rest, type: type + SUCCESS, response}))
            .fail(error => {
                next({...rest, type: type + FAIL, error})
                browserHistory.replace('/error')
            })
    }, 1000)
}