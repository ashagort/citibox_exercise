import React from 'react'
import { HeaderList } from '../../../Commons/HeaderList'

import './style.css'

export const BeerDetail = ({ selectedBeer, userFavoritesBeers, favoriteBeers, viewStyle, userGoHome }) => {
  const handleViewFavoritesBeers = () => {
    userFavoritesBeers(favoriteBeers)
  }

  const mapElementsBeer = (elements) => {
    // eslint-disable-next-line array-callback-return
    return elements.map((elem, index) => {
      return (
          <span key={index}><span >{elem.name}</span>, </span>
      )
    })
  }

  const mapFoodBeer = (elements) => {
    // eslint-disable-next-line array-callback-return
    return elements.map((elem, index) => {
      return (
                <span key={index}><span >{elem}</span>, </span>
      )
    })
  }

  return (
          <div className={'selected_beer__container'}>
              <HeaderList view={false} viewStyle={viewStyle} handleViewFavoritesBeers={handleViewFavoritesBeers} userGoHome={userGoHome} />
              <div className={'selected_beer_content'}>
                  <div className={'selected_beer_info'}>
                      <h1>{selectedBeer.name}</h1>
                      <h3>{selectedBeer.tagline}</h3>
                      <div className={'separator'}></div>
                      <div className={'description'}>
                          {selectedBeer.description}
                      </div>
                      <div className={'ingredients'}>
                          <div className={'sub__ingredients'}>
                              <p>HOPS:</p>
                              {mapElementsBeer(selectedBeer.ingredients.hops)}
                          </div>
                          <div className={'sub__ingredients'}>
                              <p>MALT:</p>
                              {mapElementsBeer(selectedBeer.ingredients.malt)}
                          </div>
                          <div className={'sub__ingredients'}>
                              <p>YEAST:</p>
                              <span>{selectedBeer.ingredients.yeast}</span>
                          </div>
                      </div>
                      <div className={'food'}>
                          <p>FOOD PAIRING:</p>
                          {mapFoodBeer(selectedBeer.food_pairing)}
                      </div>
                  </div>
                  <div className={'selected_beer_image'}>
                      <img src={selectedBeer.image_url} alt={selectedBeer.name} />
                  </div>
              </div>

        </div>
  )
}
