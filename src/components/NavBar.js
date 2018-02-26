import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Video from './Video'
import SearchBar from './SearchBar'


class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user
    }
  }

  renderNavLinks = () => {
    if (this.state.user) {
      return (
        <React.Fragment>
          <Link to={{ pathname: '/dashboard' }}>DASHBOARD</Link>
          <Link to={{ pathname: '/profile' }}>PROFILE</Link>
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