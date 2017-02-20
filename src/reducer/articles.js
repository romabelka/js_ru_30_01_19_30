import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, ADD_COMMENT, FAIL, SUCCESS, START} from '../constants'
import {arrayToMap} from '../utils'

const defaultState = {
    isLoading: false,
    entities: arrayToMap([])
}


export default (state = defaultState, action) => {
    const {type, payload, randomId} = action

    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            const entities = {...state.entities}
            delete entities[payload.id]
            return {...state, entities}

        case LOAD_ALL_ARTICLES + START:
            return {...state, isLoading: true}

        case LOAD_ALL_ARTICLES + SUCCESS:
            return {
                ...state,
                entities: arrayToMap(action.response),
                isLoading: false
            }

        case ADD_COMMENT:
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [payload.articleId]: {
                        ...state.entities[payload.articleId],
                        comments: (state.entities[payload.articleId].comments || []).concat(randomId)
                    }
                }
            }
    }

    return state
}