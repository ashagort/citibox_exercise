import React from 'react'
import { HeaderList } from '../../../Commons/HeaderList'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { iconBeer } from '../../../Utils'

import './style.css'

export const FavoritesBeers = ({ viewStyle, userFavoritesBeers, favoriteBeers, userGoHome }) => {
  const handleViewFavoritesBeers = () => {
    userFavoritesBeers(favoriteBeers)
  }

  const beersList = () => {
    return favoriteBeers.map((beer, index) => {
      return (
                <div className={'beer__list'} key={index}>
                    <div className={'beer__list__favorite'}>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>
                    </div>
                    <div className={'beer_list__info'}>
                        <div className={'info'}>
                            <p><strong>Name:</strong> {beer.name}  <strong>Date:</strong> {beer.first_brewed}</p>
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
        <div className={'beers__list__favorite__container'}>
            <HeaderList view={false} viewStyle={viewStyle} handleViewFavoritesBeers={handleViewFavoritesBeers} userGoHome={userGoHome} />
            {beersList()}
        </div>
  )
}
