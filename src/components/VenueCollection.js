import React, { Component } from 'react'
import VenueCard from './VenueCard'

class VenueCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: props.venues
    }
  }

  renderVenueCards = () => {
    return this.props.venues.map((venue) =>
      (<VenueCard venue={ venue } />)
    )
  }

}

export default VenueCollection