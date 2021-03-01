import * as axios from 'axios'

export default function () {
return {
    getBeers
}
}

async function getBeers () {
    const URL = 'https://api.punkapi.com/v2/beers'

    const beers = await axios.get(URL)

    return beers.data

}