import React, { Component } from 'react'
import { getAllVenues } from '../utils/requests'
import VenueCollection from './VenueCollection'
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

  render = () => {
    return (
      <React.Fragment>
        <div className='search-comp-container'>
          <h3>{ this.state.venues.length } Results</h3>
          <VenueCollection venues={ this.state.venues } />
        </div>
      </React.Fragment>
    )
  }

}

export default Search