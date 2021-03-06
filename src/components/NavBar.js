import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // currentUser: JSON.parse(localStorage.getItem('user')).user
      token: localStorage.getItem('auth_token'),
      currentUser: this.checkUser()
    }
  }

  componentDidMount() {
    if (!this.state.token) {
      // window.location.assign('/')
    }
  }

  checkUser = () => {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user')).user
    }
  }

  signOut = (event) => {
    event.preventDefault()
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
    window.location.assign('/')
  }

  renderNavOptions = () => {
    if (this.state.currentUser) {
      return (
        <React.Fragment>
          <Link to={{ pathname: `/dashboard/${this.state.currentUser.moniker}` }}>DASHBOARD</Link>
          <Link to={{ pathname: `/${this.state.currentUser.moniker}` }}>PROFILE</Link>
          <Link to={{ pathname: '/settings' }}>SETTINGS</Link>
          <button type='submit' className='signout-button' onClick={ this.signOut }>SIGN OUT</button>
          <SearchBar />
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className='navigation-buttons'>
          { this.renderNavOptions() }
        </div>
      </React.Fragment>
    )
  }
}

export default NavBar