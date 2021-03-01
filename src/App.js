import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {mapStateToProps} from "./state/mapStateToProps";

import './App.css';
import {useCaseStore} from "./usesCases";
import repositoryStore from './repository/index'
import {Spinner} from "./infrastructure/Commons/Spinner";

import './infrastructure/styles/_globals.css'

const repository = repositoryStore()

export const App = ({
    /* USECASES */
    getBeers,
    /* MAPSTATE */
    beers
}) => {
    const [isLoadingState, setIsLoadingState] = useState(false)

    useEffect(()=> {
        (async function initialBeers() {
            setIsLoadingState(true)
            try{
                getBeers()
            } catch (e) {
                console.error(e)
            } finally {
                setIsLoadingState(false)
            }
        })()
    }, [])

    let component

    const getLoading = () => {
        if(isLoadingState) {
            return <Spinner />
        }
        return null
    }

    const loadingComponent = getLoading()

  return (
    <React.Fragment>
        {component}
        {loadingComponent}
    </React.Fragment>
  );
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export default connect(mapStateToProps, useCaseStore(repository))(App);
