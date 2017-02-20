import {Record, Map} from 'immutable'

export const DefaultReducerState = Record({
    isLoading: false,
    entities: new Map({})
})