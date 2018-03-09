import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import NavBar from './components/NavBar'
import './styles/index.css'
// ReactDOM.render(<App />,  document.getElementById('landing-container'))

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()