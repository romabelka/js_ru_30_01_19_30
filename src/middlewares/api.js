import $ from 'jquery'

export default store => next => action => {
    if (!action.callAPI) return next(action)
    const {callAPI, ...rest} = action

    //dev only, no need in prod!!!!!
    setTimeout(() => {
        $.get(callAPI)
            .done(response => next({...rest, response}))
    }, 1000)
}