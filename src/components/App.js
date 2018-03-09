import  React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'

import  Landing  from './Landing'
import  Dashboard  from './Dashboard'
import  UserEdit  from './UserEdit'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route path='/dashboard/:moniker/edit' component = { UserEdit }/>
          <Route path='/dashboard/:moniker' component = { Dashboard }/>
        </Switch>
      </div>
    )
  }
}

export default App