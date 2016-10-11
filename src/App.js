import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter, Match, Link } from 'react-router'
import { Home, BasicRouting, Blocking, Miss, QueryParams, Recursive, Protected, NoMatch } from './Components'

// STEP 01 : Navigating using React Router  
ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/basic-routing">BasicRouting</Link></li>
        <li><Link to="/blocking">Blocking</Link></li>
        <li><Link to="/miss">Miss</Link></li>
        <li><Link to="/query-params">Query Params</Link></li>
        <li><Link to="/recursive-paths">Recursive Paths</Link></li>
        <li><Link to="/protected">Protected</Link></li>
      </ul>

      <Match exactly pattern="/" component={Home} />
      <Match pattern="/basic-routing" component={BasicRouting} />
      <Match pattern="/blocking" component={Blocking} />
      <Match pattern="/miss" component={Miss} />
      <Match pattern="/query-params" component={QueryParams} />
      <Match pattern="/recursive-paths" component={Recursive} />
      <Match pattern="/protected" component={Protected} />
    </div>
   </BrowserRouter>
  , document.getElementById('main'))



