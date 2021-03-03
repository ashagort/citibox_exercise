import React from 'react'

import { iconBeer } from '../../../Utils'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CardActions from '@material-ui/core/CardActions'

import './style.css'

export const BeersList = ({
  beers,
  getBeer,
  addFavoriteBeer
}) => {
  const handleFavoriteBeer = (beer) => {
    addFavoriteBeer(beer)
  }

  const beersList = () => {
    return beers.map((beer, index) => {
      return (
                <div className={'beer__list'} key={index}>
                    <div className={'beer__list__favorite'}>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon onClick={() => handleFavoriteBeer(beer)} />
                            </IconButton>
                        </CardActions>
                    </div>
                    <div className={'beer_list__info'}>
                        <div className={'info'}>
                            <p>Name: {beer.name}  First: {beer.first_brewed}</p>
                            <p>{beer.tagline}</p>
                        </div>
                        <div className={'beer__image'}>
                            <img src={beer.image_url} alt={beer.name} />
                        </div>
                        <div className={'avd'}>
                            {iconBeer(beer.abv)}
                        </div>
                    </div>
                </div>
      )
    })
  }

  return (
        <div className={'beers__list__container'}>
            {beersList()}
        </div>
  )
}
