
export function minChanged (newValue) {
    return {
        type: "NUM_MIN_CHANGED",
        payload: newValue
    }
}

export function maxChanged (newValue) {
    return {
        type: "NUM_MAX_CHANGED",
        payload: newValue
    }
}