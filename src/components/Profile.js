import React, { Component } from 'react'
import NavBar from './NavBar'

class Profile extends Component {
  render() {
    return (
        <React.Fragment>
          <NavBar user={{ firstName: 'Stella', lastName: 'Rousseau'}}/>
        </React.Fragment>
    )
  }
}

export default Profile