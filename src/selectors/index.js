import {createSelector} from 'reselect'
import {mapToArr} from '../utils'

const articlesGetter = state => state.articles.entities
const filtersGetter = state => state.filters

export const filteredArticlesSelector = createSelector(articlesGetter, filtersGetter, (entities, filters) => {
    console.log('---', 1)
    const articles = mapToArr(entities)
    const {selected} = filters
    const { from, to } = filters.dateRange

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})