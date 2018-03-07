import React, { Component } from 'react'
import '../styles/Dashboard.css'
import NavBar from './NavBar'
import { setCurrentUser } from '../utils/requests'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moniker: this.props.location.state.moniker,
      currentUser: JSON.parse(localStorage.getItem('user'))
    }
  }

  componentWillMount() {
    document.getElementById('video-background').innerHTML = ''
    setCurrentUser(this.state.moniker, this.props.location.state.password)
  }

  render() {
    return (
      <React.Fragment>
        <NavBar user={{ firstName: 'Stella', lastName: 'Rousseau'}}/>
      </React.Fragment>
    )
  }
}

export default Dashboard