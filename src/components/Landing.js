import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SignInForm from './SignInForm'
import RegisterForm from './RegisterForm'
import '../styles/Landing.css'

class Landing extends Component {
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


  render() {
    return (
      <div className='form-container welcome-container'>
        <RegisterForm />
        <div className='line-divider'></div>
        <div className='sign-in'>
          <p>Have an account? Sign in using the link below.</p>
          <button type='submit' className='signin-button' onClick={ this.renderSignInForm }>SIGN IN</button>
        </div>
      </div>
    )
  }
}

export default Landing
// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       firstName: '',
//       lastName:  '',
//       email:     '',
//       password:  ''
//     }
//   }

//   updateUser = (key, event) => {
//     this.setState({ [key]: event.target.value })
//   }

//   renderSignInForm = (event) => {
//     let welcomeContainer = document.getElementsByClassName('form-container welcome-container')[0]
//     welcomeContainer.innerHTML = ''
//     ReactDOM.render(<SignInForm />, welcomeContainer)
//   }

//   render() {
//     return (
//       <div className='container'>
//         <div className='form-container welcome-container'>
//           <RegisterForm />
//           <div className='line-divider'></div>
//           <div className='sign-in'>
//             <p>Have an account? Sign in using the link below.</p>
//             <button type='submit' className='signin-button' onClick={ this.renderSignInForm }>SIGN IN</button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App