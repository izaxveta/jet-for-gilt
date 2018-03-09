import React, { Component } from 'react'
import VenueCard from './VenueCard'

class VenueCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: props.venues
    }
  }
}

export default VenueCollection