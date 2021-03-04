import React from 'react'
import { PaginationContent } from '../../Commons/Pagination'
import { HeaderList } from '../../Commons/HeaderList'
import { BeerCards } from './beersCards'
import { BeersList } from './beersList'

export const CitiBoxBeers = ({
  getBeers,
  beers,
  getBeer,
  addFavoriteBeer,
  paginationBeersList,
  styleView,
  viewStyle,
  userFavoritesBeers,
  favoriteBeers,
  searchBeers,
  numPageUser,
  userGoHome
}) => {
  let component

  if (styleView === 'cards') {
    component = <BeerCards
        beers={beers}
        getBeer={getBeer}
        addFavoriteBeer={addFavoriteBeer}
    />
  }

  if (styleView === 'list') {
    component = <BeersList
        beers={beers}
        getBeer={getBeer}
        addFavoriteBeer={addFavoriteBeer}
    />
  }

  const handleChangePage = (event, newPage) => {
    getBeers(newPage)
    paginationBeersList(newPage)
  }

  const handleViewFavoritesBeers = () => {
    userFavoritesBeers(favoriteBeers)
  }

  return (
      <div className={'beers__list'}>
          <HeaderList
              view={true}
              viewStyle={viewStyle}
              handleViewFavoritesBeers={handleViewFavoritesBeers}
              searchBeers={searchBeers}
              getBeers={getBeers}
              numPageUser={numPageUser}
              userGoHome={userGoHome}
          />
          {component}
          <PaginationContent num={10} onClick={handleChangePage} />
      </div>
  )
}
