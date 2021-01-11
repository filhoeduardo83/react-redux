const initialState = {
    min: 0,
    max: 99
}

export function numeroReducer(state = initialState, action) {
    console.log(state, action)

    switch(action.type){
        case "NUM_MIN_CHANGED":
            return {
                ...state,
                min: action.payload
            }
        case "NUM_MAX_CHANGED":
            return {
                ...state,
                max: action.payload
                }
        default:
            return state
    }
}