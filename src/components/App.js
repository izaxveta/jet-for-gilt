import  React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import  Landing  from './Landing'
import  Dashboard  from './Dashboard'
import  UserEdit  from './UserEdit'
import Search from './Search'
import Venue from './Venue'

import '../styles/App.css'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route exact path='/search' component={ Search } />
          <Route path='/venue' component={ Venue } />
          <Route path='/dashboard/:moniker/edit' component = { UserEdit }/>
          <Route path='/dashboard/:moniker' component = { Dashboard }/>
        </Switch>
      </div>
    )
  }
}

export default App