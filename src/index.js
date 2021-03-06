import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import NavBar from './components/NavBar'
import './styles/index.css'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
)

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <NavBar />
  </BrowserRouter>,
  document.getElementById('nav-links')
)

registerServiceWorker()