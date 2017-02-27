import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {DefaultReducerState} from './helpers'
import {Record} from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultState = new DefaultReducerState()


export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentModel({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response, CommentModel))
    }

    return state
}