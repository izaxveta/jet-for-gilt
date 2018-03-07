import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class UserDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: JSON.parse(localStorage.getItem('user')).user
    }
  }

  render() {
    return (
      <React.Fragment>
       <p>hi</p>
      </React.Fragment>
    )
  }
}

export default UserDashboard