export const useCaseStore = (repository) => (dispatch) => ({
  getBeers: getBeers(repository, dispatch),
  getBeer: getBeer(repository, dispatch),
  searchBeers: searchBeers(repository, dispatch)
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
      type: 'SELECT_DETAIL_BEER',
      payload: beer
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
