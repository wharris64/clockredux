import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
// import logger from './middleware/logger'
import clockTimer from './middleware/clockTimer'
import * as serviceWorker from './serviceWorker'
import app from './reducers/index'

const initialState = {
    clock : {
    time: new Date()
}}
const store = createStore(
    app,
    initialState,
    applyMiddleware(clockTimer)
    )

ReactDOM.render(
 <Provider store = {store} >
 <App />
 </Provider> ,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
