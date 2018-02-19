import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WelcomeForm from './WelcomeForm'

class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  updateUser = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  signInUser = () => {
    const email = this.state.email
    const password = this.state.password
  }

  renderRegisterForm = (event) => {
    let welcomeContainer = document.getElementById('landing-container')
    welcomeContainer.innerHTML = ''
    // ReactDOM.render(<WelcomeForm />, welcomeContainer)
    window.location.reload()
  }

  render() {
    return (
      <div className='container'>
        <p>Returning users, please sign in using the form below.</p>
        <div className='welcome-form-container'>
          <div className='signin-form-containter'>
            <form className='signin-form'>
              <input required className='data-field' id='signin-email'    type='email'    placeholder='EMAIL'    onChange={ this.updateUser.bind(this, 'email') } />
              <input required className='data-field' id='signin-password' type='password' placeholder='PASSWORD' onChange={ this.updateUser.bind(this, 'password') } />
              <button type='submit' className='signin-button' onClick={ this.signInUser }>SIGN IN</button>
            </form>
          </div>
        </div>
        <div className='line-divider'></div>
        <p>New user? Click the button below to register.</p>
        <button type='submit' className='register-button' onClick={ this.renderRegisterForm }>REGISTER</button>
        <p></p>
      </div>
    )
  }
}

export default SignInForm