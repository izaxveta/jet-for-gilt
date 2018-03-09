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
}

export default Search