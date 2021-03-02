import * as axios from 'axios'

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
  const URL = `https://api.punkapi.com/v2/beers?beer_name=${name}&brewed_after=${date}`

  const filterBeers = await axios.get(URL)

  return filterBeers.data
}
