import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { handleAuthentication } from  '../utils/requests'

class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moniker: '',
      password: ''
    }
  }

  updateSignIn = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  signInUser = (event) => {
    event.preventDefault()
    // const password = this.state.password
    let user = getUser(email)
    // const token = authenticateUser(email, password)
    // console.log(token)
    // window.location.assign('/dashboard')
    const moniker = this.state.moniker
  }

  render() {
    return (
      <React.Fragment>
        <p>Returning users, please sign in using the form below.</p>
        <div className='welcome-form-container'>
          <div className='signin-form-containter'>
            <form className='signin-form'>
              <input required className='data-field' id='signin-email'    type='moniker'    placeholder='MONIKER'    onChange={ this.updateSignIn.bind(this, 'moniker') } />
              <input required className='data-field' id='signin-password' type='password' placeholder='PASSWORD' onChange={ this.updateSignIn.bind(this, 'password') } />
              {/* <button type='submit' className='signin-button' onClick={ this.signInUser }>SIGN IN</button> */}
              <Link to={{ pathname: `/dashboard/${this.state.moniker}`,  state: { moniker:this.state.moniker, password: this.state.password } }} className='signin-button'>SIGN IN</Link>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SignInForm