import React, { Component } from 'react'
import '../styles/Dashboard.css'
import NavBar from './NavBar'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.location.state,
      user: {firstName: 'Stella',
        lastName: 'Rousseau'
        }
    }
  }

  componentDidMount() {
    document.getElementById('video-background').innerHTML = ''
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