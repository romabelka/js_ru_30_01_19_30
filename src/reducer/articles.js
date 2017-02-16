import {DELETE_ARTICLE, LOAD_ALL_ARTICLES} from '../constants'
import {arrayToMap} from '../utils'

const defaultState = arrayToMap([])

export default (articles = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            return articles.filter(article => article.id !== payload.id)

        case LOAD_ALL_ARTICLES:
            return arrayToMap(action.response)
    }

    return articles
}