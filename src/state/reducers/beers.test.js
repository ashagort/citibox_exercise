import beers from './beers'
import { BeersPageMock } from '../../test/fixtures/beersPage'
import { searchBeersMock } from '../../test/fixtures/searchingBeers'

describe('Beer reducer should', function () {
  it('get all beers from pagination', function () {
    const initialState = { beerList: [] }

    const action = {
      type: 'GET_BEERS',
      payload: BeersPageMock
    }

    const expectedState = { beerList: BeersPageMock }

    expect(expectedState).toEqual(beers(initialState, action))
  })
  it('get beers from searching', function () {
    const initialState = { beerList: BeersPageMock }

    const action = {
      type: 'SEARCHING_BEERS',
      payload: searchBeersMock
    }

    const expectedState = { beerList: searchBeersMock }

    expect(expectedState).toEqual(beers(initialState, action))
  })
  it('get beer for detail', function () {
    const initialState = { selectedBeer: {} }

    const action = {
      type: 'SELECT_DETAIL_BEER',
      payload: BeersPageMock
    }

    const expectedState = { selectedBeer: BeersPageMock }

    expect(expectedState).toEqual(beers(initialState, action))
  })
  it('get beer for favorite', function () {
    const initialState = { favoriteBeers: [] }

    const action = {
      type: 'FAVORITE_BEER',
      payload: BeersPageMock
    }

    const expectedState = { favoriteBeers: [BeersPageMock] }

    expect(expectedState).toEqual(beers(initialState, action))
  })
  it('add num page', function () {
    const initialState = { pagination: 1 }

    const action = {
      type: 'ADD_NUM_PAGE',
      payload: 2
    }

    const expectedState = { pagination: 2 }

    expect(expectedState).toEqual(beers(initialState, action))
  })
})
