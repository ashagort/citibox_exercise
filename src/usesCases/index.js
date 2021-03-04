export const useCaseStore = (repository) => (dispatch) => ({
  getBeers: getBeers(repository, dispatch),
  getBeer: getBeer(repository, dispatch),
  searchBeers: searchBeers(repository, dispatch),
  addFavoriteBeer: addFavoriteBeer(dispatch),
  paginationBeersList: paginationBeersList(dispatch),
  viewStyle: viewStyle(dispatch),
  userFavoritesBeers: userFavoritesBeers(dispatch),
  userGoHome: userGoHome(dispatch)
})

function getBeers (repository, dispatch) {
  return async function (page) {
    const beers = await repository.getBeers(page)
    dispatch({
      type: 'IS_LOADING'
    })

    dispatch({
      type: 'GET_BEERS',
      payload: beers
    })
  }
}

function getBeer (repository, dispatch) {
  return async function (beerId) {
    const beer = await repository.getBeer(beerId)
    dispatch({
      type: 'IS_LOADING'
    })

    dispatch({
      type: 'SELECT_DETAIL_BEER',
      payload: beer[0]
    })
  }
}

function searchBeers (repository, dispatch) {
  return async function (nameBeer, dateBeer) {
    const searchBeer = await repository.searchBeers(nameBeer, dateBeer)
    dispatch({
      type: 'SEARCHING_BEERS',
      payload: searchBeer
    })
  }
}

function addFavoriteBeer (dispatch) {
  return function (beer) {
    dispatch({
      type: 'FAVORITE_BEER',
      payload: beer
    })
  }
}

function paginationBeersList (dispatch) {
  return function (numPage) {
    dispatch({
      type: 'ADD_NUM_PAGE',
      payload: numPage
    })
  }
}

function viewStyle (dispatch) {
  return function (style) {
    dispatch({
      type: 'CHANGE_VIEW',
      payload: style
    })
  }
}

function userFavoritesBeers (dispatch) {
  return function (favoritesBeers) {
    if (favoritesBeers.length > 0) {
      dispatch({
        type: 'MY_FAVORITES_BEERS'
      })
    } else {
      window.alert('Add some beer to your favorites')
    }
  }
}

function userGoHome (dispatch) {
  return function () {
    dispatch({
      type: 'GO_BACK'
    })
  }
}
