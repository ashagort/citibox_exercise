export default function beers (state = {}, action) {
  const newState = { ...state }

  switch (action.type) {
    case 'GET_BEERS':
      return { ...newState, beerList: action.payload }
    default:
      return newState
  }
}
