import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, useRouterHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './App.js'
import { Feed, Grid, User, Users, Images, Search, ImageShow } from './pages'
import NoMatch from './NoMatch.js'
import { FastClick } from './vendor'

const history = useRouterHistory(createHashHistory)({ queryKey: false })

const store = configureStore()

$(function () {ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Feed} />
          <Route path="feed" component={Feed}/>
          <Route path="grid" component={Grid}/>
          <Route path="users" component={Users}>
            <Route path="/users/:id" component={User}/>
          </Route>
          <Route path="images" component={Images}>
            <Route path="/images/:id" component={ImageShow}/>
          </Route>
          <Route path="search" component={Search}/>
        </Route>
        <Route path="*" component={NoMatch}/>
      </Router>
    </Provider>
  ),
  document.querySelector('#content')
)});

$(function() {(FastClick.attach(document.body))})
