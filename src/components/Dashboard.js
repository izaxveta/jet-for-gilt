import React, { Component } from 'react'
import '../styles/Dashboard.css'
import NavBar from './NavBar'
import UserDashboard from './UserDashboard'
import { setCurrentUser } from '../utils/requests'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moniker: this.props.match.params.moniker,
      currentUser: JSON.parse(localStorage.getItem('user'))
    }
  }

  componentWillMount() {
    document.getElementById('video-background').innerHTML = ''
    if (!this.state.currentUser) {
      setCurrentUser(this.state.moniker, this.props.location.state.password)
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <UserDashboard />
      </React.Fragment>
    )
  }
}

export default Dashboard