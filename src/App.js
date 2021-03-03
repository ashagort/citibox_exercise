import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { mapStateToProps } from './state/mapStateToProps'
import { useCaseStore } from './usesCases'
import repositoryStore from './repository/index'

import { Spinner } from './infrastructure/Commons/Spinner'
import { BeerDetail } from './infrastructure/views/layouts/beerDetail'

import './infrastructure/styles/_globals.css'
import './App.css'
import { CitiBoxBeers } from './infrastructure/views/layouts'

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
    />
  }

  if (stage === 'detail') {
    component = <BeerDetail
        viewStyle={viewStyle}
        selectedBeer={selectedBeer}
        userFavoritesBeers={userFavoritesBeers}
        favoriteBeers={favoriteBeers}
      />
  }

  if (stage === 'favorites') {
    component = <div>Favorites</div>
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
