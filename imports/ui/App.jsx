import React, { Component } from 'react';
import Home from './Home'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// App component - represents the whole app
export default class App extends Component {
  render() {
    return <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Redirect to ='/Home'/>
      </Switch>
    </BrowserRouter>
  }
}