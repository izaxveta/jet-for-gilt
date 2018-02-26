import React, { Component } from 'react';
import getUser from '../utils/requests'
// , query: { {user: getUser(this.state.email) }}
import { Link } from 'react-router-dom'
// import { authenticateUser } from  '../utils/requests'

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

  signInUser = (event) => {
    event.preventDefault()
    const email = this.state.email
    // const password = this.state.password
    let user = getUser(email)
    // const token = authenticateUser(email, password)
    // console.log(token)
    // window.location.assign('/dashboard')
  }

  renderRegisterForm = (event) => {
    let welcomeContainer = document.getElementById('landing-container')
    window.location.reload()
  }

  render() {
    return (
      <React.Fragment>
        <p>Returning users, please sign in using the form below.</p>
        <div className='welcome-form-container'>
          <div className='signin-form-containter'>
            <form className='signin-form'>
              <input required className='data-field' id='signin-email'    type='email'    placeholder='EMAIL'    onChange={ this.updateUser.bind(this, 'email') } />
              <input required className='data-field' id='signin-password' type='password' placeholder='PASSWORD' onChange={ this.updateUser.bind(this, 'password') } />

              <Link to={{ pathname: '/dashboard',  state: this.state.email }} className='signin-button'>SIGN IN</Link>
            </form>
          </div>
        </div>
        <div className='line-divider'></div>
        <p>New user? Click the button below to register.</p>
        <button type='submit' className='register-button' onClick={ this.renderRegisterForm }>REGISTER</button>
        <p></p>
      </React.Fragment>
    )
  }
}

export default SignInForm