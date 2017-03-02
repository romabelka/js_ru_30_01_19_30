import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {Record, Map, OrderedMap, List} from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultState = new (Record({
    pagination: new Map({}),
    total: null,
    entities: new OrderedMap({})
}))


export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentModel({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return state
                .mergeIn(['entities'], arrayToMap(response.records, CommentModel))
                .setIn(['pagination', payload.page], new List(response.records.map(record => record.id)))
                .set('total', response.total)
    }

    return state
}