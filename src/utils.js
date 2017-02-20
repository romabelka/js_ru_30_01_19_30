import {Map} from 'immutable'

export function arrayToMap(arr, Model) {
    return arr.reduce((acc, entity) =>
        acc.set(entity.id, Model ? new Model(entity) : entity)
        , new Map({}))
}

export function mapToArr(map) {
    return map.valueSeq().toArray()
}