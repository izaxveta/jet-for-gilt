import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import UserNav from './UserNav'
import getUser from './utils/requests'
import '../styles/Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: getUser
    }
  }

  componentDidMount() {
    document.getElementById('video-background').innerHTML = ''
  }
  render() {
    return (
      <div>hi</div>
    )
  }
}

export default Dashboard