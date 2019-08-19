import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import AuthServices from './services/auth.services'


import ProtectedRoute from './components/routes/ProtectedRoute'


import CoastersList from './components/Coaster-list'
import CoasterDetail from './components/Coaster-detail'
import NavBar from './components/Navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Profile from './components/Profile'


class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authServices = new AuthServices()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log("Un componente ha cambiado el usuario en App:", this.state.loggedInUser)
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authServices.loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(x => this.setState({ loggedInUser: false }))
    }
  }

  render() {

    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />

          <Switch>
            <ProtectedRoute path='/profile' user={this.state.loggedInUser} component={Profile} />
            <Route path="/coasters" exact render={() => <CoastersList userInSession={this.state.loggedInUser} />} />
            <Route path="/coasters/:id" exact component={CoasterDetail} />
          </Switch>
        </>
      );
    } else {
      return (
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />

          <Switch>
            <ProtectedRoute path='/profile' user={this.state.loggedInUser} component={Profile} />
            <Route path="/coasters" exact render={() => <CoastersList userInSession={this.state.loggedInUser} />} />
            <Route path="/coasters/:id" exact component={CoasterDetail} />
            <Route path="/signup" exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
            <Route path="/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} />
          </Switch>
        </>
      );
    }
  }
}

export default App;
