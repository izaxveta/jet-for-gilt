import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/VenueCard.css'

const VenueCard = (props) => {
  const venue = props.venue
  return (
    <div className='venue-container'>
      <Link to={{ pathname: `/venue/${venue.name}`, state: { venue: venue }}}>
        <div className='venue-listing'>
          <img src={ venue.image_url } alt='' className='listing-venue-image'/>
          <div className='venue-listing-info'>
            <div className='grouped-info-a'>
              <div className='venue-name-category'>
                <div className='listing-name'>{ venue.name }</div>
                <div className='listing-categories'>{ displayVenueCategories(venue.categories) }</div>
              </div>
              <div className='listing-location'>{ displayVenueLocation(venue.location) }</div>
            </div>
            <div className='grouped-info-b'>
              <div className='venue-price-rating'>
                <div className='listing-price'>{ venue.price }</div>
                <div className='popularity'>
                  <div className='listing-rating'>{ venue.rating }/5</div>
                  <div className='listing-review_count'>({ venue.review_count } Ratings)</div>
                </div>
              </div>
              <div className='listing-phone'>{ venue.phone }</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

const displayVenueCategories = (categoryCollection) => {
  return categoryCollection.join(', ')
}

const displayVenueLocation = (location) => {
  return location.join('\n')
}

export default VenueCard