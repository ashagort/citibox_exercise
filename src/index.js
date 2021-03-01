import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import {initialState} from "./state/initialState";
import {configureStore} from "./infrastructure/connectReact";
import {reducers} from "./state/reducers";
import {createMiddleware} from "./infrastructure/createMiddleware";

const middleware = createMiddleware(initialState)

const store = configureStore(initialState, middleware, reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
