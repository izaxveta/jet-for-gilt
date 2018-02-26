import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SignInForm from './SignInForm'
import RegisterForm from './RegisterForm'
import Video from './Video'
import '../styles/Landing.css'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'register'
    }
  }

  onClickSignIn = (event) => {
    event.preventDefault()
    this.setState({ mode: 'sign-in' })
  }

  componentDidMount() {
    let videoContainer = document.getElementById('video')
    ReactDOM.render(<Video />, videoContainer)
  }
  renderWelcomeContainer = () => {
    if (this.state.mode === 'register') {
      return (
        <React.Fragment>
          <RegisterForm />
          <div className='line-divider'></div>
          <div className='sign-in'>
            <p>Have an account? Sign in using the link below.</p>
            <button type='submit' className='signin-button' onClick={ this.onClickSignIn }>SIGN IN</button>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <SignInForm />
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <div className='form-container welcome-container'>
        { this.renderWelcomeContainer() }
      </div>
    )
  }
}

export default Landing