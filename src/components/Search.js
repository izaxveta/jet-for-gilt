import React, { Component } from 'react'
import { getAllVenues } from '../utils/requests'
import VenueCollection from './VenueCollection'
import NavBar from './NavBar'
import '../styles/Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: this.props.location.state,
      venues: []
    }
  }

  componentWillMount() {
    getAllVenues(this.state.query)
      .then((venues) => this.setVenues(venues))
      .catch((error) => console.error({ error }))
    this.render()
  }

  setVenues = (venueResults) => {
    this.setState({ venues: venueResults })
  }

}

export default Search