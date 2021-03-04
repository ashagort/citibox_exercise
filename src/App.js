import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { mapStateToProps } from './state/mapStateToProps'
import { useCaseStore } from './usesCases'
import repositoryStore from './repository/index'

import { Spinner } from './infrastructure/Commons/Spinner'
import { BeerDetail } from './infrastructure/views/layouts/beerDetail'
import { CitiBoxBeers } from './infrastructure/views/layouts'
import { FavoritesBeers } from './infrastructure/views/layouts/favoritesBeers'

import './infrastructure/styles/_globals.css'
import './App.css'

const repository = repositoryStore()

export const App = ({
  /* USECASES */
  getBeers,
  getBeer,
  searchBeers,
  paginationBeersList,
  addFavoriteBeer,
  viewStyle,
  userFavoritesBeers,
  userGoHome,
  /* MAPSTATE */
  beers,
  stage,
  isLoading,
  selectedBeer,
  numPageUser,
  styleView,
  favoriteBeers
}) => {
  const [isLoadingState, setIsLoadingState] = useState(false)

  useEffect(() => {
    (async function initialBeers () {
      setIsLoadingState(true)
      try {
        getBeers(numPageUser)
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoadingState(false)
      }
    })()
  }, [])

  let component

  if (stage === 'initial') {
    component = <CitiBoxBeers
        getBeers={getBeers}
        beers={beers}
        getBeer={getBeer}
        addFavoriteBeer={addFavoriteBeer}
        paginationBeersList={paginationBeersList}
        styleView={styleView}
        viewStyle={viewStyle}
        userFavoritesBeers={userFavoritesBeers}
        favoriteBeers={favoriteBeers}
        searchBeers={searchBeers}
        numPageUser={numPageUser}
        userGoHome={userGoHome}
    />
  }

  if (stage === 'detail') {
    component = <BeerDetail
        viewStyle={viewStyle}
        selectedBeer={selectedBeer}
        userFavoritesBeers={userFavoritesBeers}
        favoriteBeers={favoriteBeers}
        userGoHome={userGoHome}
      />
  }

  if (stage === 'favorites') {
    component = <FavoritesBeers
        viewStyle={viewStyle}
        userFavoritesBeers={userFavoritesBeers}
        favoriteBeers={favoriteBeers}
        userGoHome={userGoHome}
    />
  }

  const getLoading = () => {
    if (isLoadingState || isLoading) {
      return <Spinner />
    }
    return null
  }

  const loadingComponent = getLoading()

  return (
    <React.Fragment>
      {loadingComponent}
        {component}
    </React.Fragment>
  )
}

export default connect(mapStateToProps, useCaseStore(repository))(App)
