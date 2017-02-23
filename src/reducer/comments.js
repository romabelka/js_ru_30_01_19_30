import {ADD_COMMENT} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'

const defaultState = arrayToMap(defaultComments)


export default (state = defaultState, action) => {
    const {type, payload, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {...payload.comment, id: randomId})
    }

    return state
}