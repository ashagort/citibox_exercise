import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { mapStateToProps } from './state/mapStateToProps'
import { useCaseStore } from './usesCases'
import repositoryStore from './repository/index'

import { Spinner } from './infrastructure/Commons/Spinner'
import { BeerList } from './infrastructure/views/layouts/beersList'

import './infrastructure/styles/_globals.css'
import './App.css'

const repository = repositoryStore()

export const App = ({
  /* USECASES */
  getBeers,
  getBeer,
  searchBeers,
  /* MAPSTATE */
  beers,
  stage,
  isLoading
}) => {
  const [isLoadingState, setIsLoadingState] = useState(false)

  useEffect(() => {
    (async function initialBeers () {
      setIsLoadingState(true)
      try {
        getBeers(1)
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoadingState(false)
      }
    })()
  }, [])

  let component

  if (stage === 'initial') {
    component = <BeerList
        getBeers={getBeers}
        beers={beers}
        getBeer={getBeer}
    />
  }

  if (stage === 'detail') component = <div>Detalle Beer</div>

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

// eslint-disable-next-line react-hooks/rules-of-hooks
export default connect(mapStateToProps, useCaseStore(repository))(App)
