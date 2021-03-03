import React from 'react'
import { iconBeer } from '../../../Utils'
import { HeaderList } from '../../../Commons/HeaderList'

export const BeerDetail = ({ selectedBeer, userFavoritesBeers, favoriteBeers, viewStyle }) => {
  console.log(selectedBeer, 'selected')

  const handleViewFavoritesBeers = () => {
    userFavoritesBeers(favoriteBeers)
  }

  return (
        <div className={'selected_beer__container'}>
            <HeaderList view={false} viewStyle={viewStyle} handleViewFavoritesBeers={handleViewFavoritesBeers} />
            <div className={'detail__header'}>
                <div className={'detail__info'}>
                    <p>{selectedBeer.name}</p>
                    <p>{selectedBeer.tagline}</p>
                </div>
                <div className={'detail__icon'}>
                    {iconBeer(selectedBeer.abv)}
                </div>
            </div>
            <div className={'detail__info__container'}>
                <div className={'detail__image'}>
                    <img src={selectedBeer.image_url} alt={selectedBeer.name} />
                </div>
                <div className={'detail__more_info'}>
                    <p>{selectedBeer.description}</p>
                    <p>{selectedBeer.first_brewed}</p>
                    <p>{selectedBeer.brewers_tips}</p>
                    {/* <p>{selectedBeer.food_pairing}</p>
                    <p>{selectedBeer.ingredients}</p> */}
                </div>
            </div>
        </div>
  )
}
