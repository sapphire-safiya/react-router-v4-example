import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import { Home, About, Topics } from './Components'


//import { Provider } from 'react-redux'
//import { createStore, compose, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'
//Import a reducer that will be used to createStore
//import { reducer } from './reducers'


// STEP 01 : Navigating using React Router  
ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <Match exactly pattern="/" component={Home} />
      <Match pattern="/about" component={About} />
      <Match pattern="/topics" component={Topics} />
    </div>
   </BrowserRouter>
  , document.getElementById('main'))


// Have client use the initial state defined by the server
// Use Thunk middleware
/*const initialState = window.__INITIAL_STATE__
const store = createStore(reducer, initialState, applyMiddleware(thunk))*/
/*<Provider store={store}>
    { routes }
  </Provider>*/


