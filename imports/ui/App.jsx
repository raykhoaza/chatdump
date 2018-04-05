import React, { Component } from 'react';
import HomePage from './HomePage.jsx';
import SignUpPage from './SignUpPage.jsx';
import LoginPage from './LoginPage.jsx';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// App component - represents the whole app
export default class App extends Component {
  render() {
    return <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/signup' component={SignUpPage}/>
        <Route path='/login' component={LoginPage}/>
        <Redirect to ='/HomePage'/>
      </Switch>
    </BrowserRouter>
  }
}