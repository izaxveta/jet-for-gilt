import React, { Component } from 'react'
import NavBar from './NavBar'

class UserEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: JSON.parse(localStorage.getItem('user')).user
    }
  }
        <NavBar />
}

