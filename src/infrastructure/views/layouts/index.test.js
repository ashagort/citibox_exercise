import React from 'react'
import { render } from '@testing-library/react'
import { searchBeersMock } from '../../../test/fixtures/searchingBeers'
import { BeersPageMock } from '../../../test/fixtures/beersPage'
import { CitiBoxBeers } from './index'

describe('Beers List [View]', function () {
  let wrapper

  let getBeers
  let beers
  let getBeer
  let addFavoriteBeer
  let paginationBeersList
  let styleView
  let userFavoritesBeers
  let favoriteBeers
  let searchBeers
  let numPageUser
  let userGoHome

  beforeEach(function () {
    getBeers = jest.fn()
    beers = searchBeersMock
    getBeer = jest.fn()
    addFavoriteBeer = jest.fn()
    styleView = jest.fn()
    paginationBeersList = jest.fn()
    userFavoritesBeers = jest.fn()
    favoriteBeers = BeersPageMock
    searchBeers = searchBeersMock
    numPageUser = 1
    userGoHome = jest.fn()

    wrapper = render(
          <CitiBoxBeers
          getBeers={getBeers}
          beers={beers}
          getBeer={getBeer}
          addFavoriteBeer={addFavoriteBeer}
          styleView={styleView}
          paginationBeersList={paginationBeersList}
          userFavoritesBeers={userFavoritesBeers}
          favoriteBeers={favoriteBeers}
          searchBeers={searchBeers}
          numPageUser={numPageUser}
          userGoHome={userGoHome}
          />
    )
  })
  it('Layout should', function () {
    const { container } = wrapper
    expect(container.getElementsByClassName('beers__list')).toBeDefined()
    expect(container.getElementsByClassName('header__container')).toBeDefined()
  })
})
