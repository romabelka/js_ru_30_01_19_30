export function arrayToMap(arr) {
    return arr.reduce((acc, entity) => ({
        ...acc, [entity.id]: entity
    }), {})
}

export function mapToArr(map) {
    return Object.keys(map).map(id => map[id])
}