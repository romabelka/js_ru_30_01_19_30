import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'
import {arrayToMap} from '../utils'

const defaultState = arrayToMap(defaultArticles)

export default (articles = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
    }

    return articles
}