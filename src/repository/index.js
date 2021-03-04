import * as axios from 'axios'

const beerName = {}
const beerDate = {}

export default function () {
  return {
    getBeers,
    getBeer,
    searchBeers
  }
}

async function getBeers (page) {
  const URL = `https://api.punkapi.com/v2/beers?page=${page}`

  const beers = await axios.get(URL)

  return beers.data
}

async function getBeer (beerId) {
  const URL = `https://api.punkapi.com/v2/beers/${beerId}`

  const beer = await axios.get(URL)

  return beer.data
}

async function searchBeers (name, date) {
  if (name !== '') {
    Object.assign(beerName, { beer_name: name })
  }

  if (date !== '') {
    Object.assign(beerDate, { brewed_after: date })
  }

  const queryParams = Object.assign({}, beerName, beerDate)

  const baseUrl = 'https://api.punkapi.com/v2/beers?'
  const queryString = new URLSearchParams(queryParams).toString()
  const URL = `${baseUrl}${queryString}`

  const filterBeers = await axios(URL)

  return filterBeers.data
}
