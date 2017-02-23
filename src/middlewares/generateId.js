export default store => next => action => {
    const {generateId, ...rest} = action
    if (!generateId) return next(action)

    next({...rest, randomId: Date.now() + Math.random()})
}