import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }


  render() {
    return (
      <div className='signin-form'>
        <p>Returning users, please sign in using the form below.</p>
        <form className='register-form'>
          <input required className='data-field' id='signin-email'    type='email'    placeholder='EMAIL'    onChange={ this.updateUser.bind(this, 'email') } />
          <input required className='data-field' id='signin-password' type='password' placeholder='PASSWORD' onChange={ this.updateUser.bind(this, 'password') } />
          <div className='line-divider'></div>
          <button type='submit' className='signin-button' onClick={ this.signInUser }>SIGN IN</button>
        </form>
      </div>
    )
  }

}

export default SignInForm