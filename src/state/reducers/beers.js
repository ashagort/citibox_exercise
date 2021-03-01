export default function beers(state = {}, action) {
    let newState= {...state}

    switch (action.type){
        case 'GET_BEERS':
            return {...newState, ...action.payload}
        default:
            return newState
    }
}