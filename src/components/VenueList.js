import React from 'react'
import NavBar from './NavBar'
import Venue from './Venue'

const createVenues = (venues) => {
  return venues.map((venue) =>
    (<Venue venue={ venue } key={ venue.id }/>)
  )
}

const VenueList = (props) => {
  const venues = props.venues

  return (
    <React.Fragment>
      <NavBar user={{ firstName: 'Stella', lastName: 'Rousseau'}}/>
      <div class='search-listings'>
        { createVenues(venues) }
      </div>
    </React.Fragment>
  )
}

export default VenueList