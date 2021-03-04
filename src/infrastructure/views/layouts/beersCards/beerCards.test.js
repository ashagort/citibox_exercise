import React from 'react'
import { render } from '@testing-library/react'

import { BeerCards } from './index'
import { searchBeersMock } from '../../../../test/fixtures/searchingBeers'

describe('Beers Cards [Views]', function () {
  let wrapper

  let beers
  let getBeer
  let addFavoriteBeer

  beforeEach(function () {
    beers = searchBeersMock
    getBeer = jest.fn()
    addFavoriteBeer = jest.fn()

    wrapper = render(
          <BeerCards
              beers={beers}
              getBeer={getBeer}
              addFavoriteBeer={addFavoriteBeer}
              />
    )
  })

  it('should Cards Beers', function () {
    const { container } = wrapper

    expect(container.getElementsByClassName('card_beer_content')).toBeDefined()
  })
})
