import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SignInForm from './SignInForm'
import { addUser } from '../utils/requests'
import '../styles/welcome-form.scss'

class WelcomeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName:  '',
      email:     '',
      password:  ''
    }
  }

  updateUser = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  renderSignInForm = (event) => {
    let welcomeContainer = document.getElementsByClassName('form-container welcome-container')[0]
    welcomeContainer.innerHTML = ''
    ReactDOM.render(<SignInForm />, welcomeContainer)
  }

  registerUser = (event) => {
    event.preventDefault()
    const firstName = this.state.firstName
    const lastName  = this.state.lastName
    const email     = this.state.email
    const password  = this.state.password

    addUser(firstName, lastName, email, password)
      .then((user) => {
        if(!user) {
          alert("Input invalid.")
        } else {
          console.log('this is a unique user')
          this.renderSignInForm()
        }
      })
      .catch((error) => console.error({ error }))
  }

  render() {
    return (
      <div className='container'>
        <div className='form-container welcome-container'>
          <div className='welcome-form'>
            <form className='register-form'>
              <input required className='data-field' id='register-first-name' type='text'     placeholder='FIRST NAME' onChange={ this.updateUser.bind(this, 'firstName') } />
              <input required className='data-field' id='register-last-name'  type='text'     placeholder='LAST NAME'  onChange={ this.updateUser.bind(this, 'lastName') } />
              <input required className='data-field' id='register-email'      type='email'    placeholder='EMAIL'      onChange={ this.updateUser.bind(this, 'email') } />
              <input required className='data-field' id='register-password'   type='password' placeholder='PASSWORD'   onChange={ this.updateUser.bind(this, 'password') } />
              <button type='submit' className='register-button' onClick={ this.registerUser }>REGISTER</button>
            </form>
          </div>
          <div className='line-divider'></div>
          <div className='sign-in'>
            <p>Have an account? Sign in using the link below.</p>
            <button type='submit' className='signin-button' onClick={ this.renderSignInForm }>SIGN IN</button>
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomeForm
