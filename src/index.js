import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import { initialState } from './state/initialState'
import { configureStore } from './infrastructure/connectReact'
import { reducers } from './state/reducers'
import { createMiddleware } from './infrastructure/createMiddleware'

const middleware = createMiddleware(initialState)

const store = configureStore(initialState, middleware, reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
