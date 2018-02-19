import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import WelcomeForm from './components/WelcomeForm'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<WelcomeForm />, document.getElementById('landing-container'))

registerServiceWorker()