import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, ADD_COMMENT, LOAD_ARTICLE, FAIL, SUCCESS, START} from '../constants'
import {arrayToMap} from '../utils'
import {Map, Record} from 'immutable'
import {DefaultReducerState} from './helpers'

const ArticleModel = Record({
    id: null,
    date: null,
    title: null,
    text: null,
    comments: [],
    isLoading: false,
    isLoaded: false
})

const defaultState = new DefaultReducerState()


export default (state = defaultState, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.deleteIn(['entities', payload.id])

        case LOAD_ALL_ARTICLES + START:
            return state.set('isLoading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return state
                .set('isLoading', false)
                .set('entities', arrayToMap(response, ArticleModel))

        case ADD_COMMENT:
            return state.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId))

        case LOAD_ARTICLE + START:
            return state.setIn(['entities', payload.id, 'isLoading'], true)

        case LOAD_ARTICLE + SUCCESS:
            return state.setIn(['entities', payload.id], new ArticleModel({...response, isLoaded: true}))
    }

    return state
}