import React, { Component } from 'react'

class UserEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: JSON.parse(localStorage.getItem('user')).user
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <p>Edit User Component { this.state.currentUser.moniker }</p>
      </React.Fragment>
    )
  }
}

export default UserEdit