import  React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import  Landing  from './Landing'
import  Dashboard  from './Dashboard'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route exact path='/dashboard' component = { Dashboard }/>
        </Switch>
      </div>
    )
  }
}

export default App