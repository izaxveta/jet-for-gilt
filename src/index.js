import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import  Landing  from './components/Landing'
import  Dashboard  from './components/Dashboard'

import './styles/index.css'
// ReactDOM.render(<App />,  document.getElementById('landing-container'))

ReactDOM.render(
  <Router>
    <div class='app'>
      <Route exact path='/' component={ Landing } />
      <Route exact path='/dashboard' component={ Dashboard } />
    </div>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()