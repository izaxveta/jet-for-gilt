import  React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import  Landing  from './Landing'
import  Dashboard  from './Dashboard'
import  Profile  from './Profile'
import  Settings  from './Settings'
import  VenueList  from './VenueList'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route exact path='/dashboard' component = { Dashboard }/>
          <Route exact path='/profile' component = { Profile }/>
          <Route exact path='/settings' component = { Settings }/>
          <Route exact path='/search' component = { VenueList }/>
        </Switch>
      </div>
    )
  }
}

export default App