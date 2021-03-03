export default function beers (state = {}, action) {
  const newState = { ...state }
  let favoritesBeers = []

  switch (action.type) {
    case 'GET_BEERS':
      return { ...newState, beerList: action.payload }
    case 'SELECT_DETAIL_BEER':
      return { ...newState, selectedBeer: action.payload }
    case 'FAVORITE_BEER':
      favoritesBeers = state.favoriteBeers
      favoritesBeers.push(action.payload)
      return { ...newState, favoriteBeers: favoritesBeers }
    case 'ADD_NUM_PAGE':
      return { ...newState, pagination: action.payload }
    default:
      return newState
  }
}
