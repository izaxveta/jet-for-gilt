import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: JSON.parse(localStorage.getItem('user')).user
    }
  }

componentWillMount() {
  if (!this.state.currentUser) {
    window.location.assign('/')
  }
}

  renderNavLinks = () => {
    if (this.state.currentUser) {
      return (
        <React.Fragment>
          <Link to={{ pathname: '/profile' }}>PROFILE</Link>
          <Link to={{ pathname: `/dashboard/${this.state.currentUser.moniker}` }}>DASHBOARD</Link>
          <Link to={{ pathname: '/settings' }}>SETTINGS</Link>
          <Link to={{ pathname: '/logout' }}>LOG OUT</Link>
          <SearchBar />
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <div className='navigation-buttons'>
        { this.renderNavLinks() }
      </div>
    )
  }
}

export default NavBar