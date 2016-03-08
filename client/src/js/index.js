import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, useRouterHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history'
import App from './App.js'
import { Feed, Grid, User, Search } from './pages'
import NoMatch from './NoMatch.js'
import { FastClick } from './vendor'

const history = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Feed} />
        <Route path="feed" component={Feed}/>
        <Route path="grid" component={Grid}/>
        <Route path="users" component={Users}>
          <Route path="/user/:userId" component={User}/>
        </Route>
        <Route path="search" component={Search}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Router>
  ),
  document.querySelector('#content')
);

FastClick.attach(document.body)
