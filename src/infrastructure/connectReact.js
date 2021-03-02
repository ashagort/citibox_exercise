import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { IS_PRODUCTION } from './config'

export const configureStore = (
  initialState = {},
  middleware = [],
  reducers
) => {
  const combinedReducers = combineReducers({
    ...reducers
  })

  const composeEnhancer = !IS_PRODUCTION
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

  const enhancer = composeEnhancer(applyMiddleware(...middleware))
  const store = createStore(combinedReducers, initialState, enhancer)

  return store
}
