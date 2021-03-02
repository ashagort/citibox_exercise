import * as axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import repository from './index'
import { searchBeersMock } from '../test/fixtures/searchingBeers'

const axiosMocked = new MockAdapter(axios)

describe('Repository call endpoint for search Beers', function () {
  beforeEach(function () {
    axiosMocked.reset()
  })
  it('Retrieve Beer from user searching', async function () {
    const name = 'ipa'
    const date = '01-2006'
    const URL = `https://api.punkapi.com/v2/beers?beer_name=${name}&brewed_after=${date}`

    axiosMocked.onGet(URL).reply(200, searchBeersMock)

    const response = await repository().searchBeers(name, date)

    const expectedResponse = searchBeersMock

    expect(response).toEqual(expectedResponse)
  })
})
