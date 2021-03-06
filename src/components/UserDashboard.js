import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class UserDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  setUser = () => {
    if (localStorage.getItem('user')) {
      this.setState({ currentUser: JSON.parse(localStorage.getItem('user')).user })
    }
  }

  componentWillMount() {
    this.setUser()
  }

  renderEditButton = () => {
    if (!this.state.currentUser.birthday) {
      return (
        <Link to={{ pathname: `/dashboard/${this.state.currentUser.moniker}/edit` }} className='signin-button'>COMPLETE PROFILE</Link>
      )
    } else {
      return (
        <Link to={{ pathname: `/dashboard/${this.state.currentUser.moniker}/edit` }} className='signin-button'>EDIT</Link>
      )
    }
  }

  renderUserDashboard = () => {
    return (
      <React.Fragment>
        <div className='dashboard-name'>{ this.state.currentUser.first_name }</div>
        <div className='dashboard-birthday'>{ this.state.currentUser.birthday }</div>
        <div className='dashboard-nationality'>{ this.state.currentUser.nationality }</div>
        <div className='dashboard-occupation'>{ this.state.currentUser.occupation }</div>
        { this.renderEditButton() }
      </React.Fragment>
    )
  }
  render() {
    return (
      <React.Fragment>
        { this.renderUserDashboard() }
      </React.Fragment>
    )
  }
}

export default UserDashboard