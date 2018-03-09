import React from 'react'

const VenueProfile = (props) => {
  const venue = props.venue

  return (
    <React.Fragment>
      <div className='venue-profile'>
        <div className='venue'>
          <img src={ venue.image_url } alt='' className='venue-image' />
          <div className='venue-info'>
            <div className='general-info'>
              <div className='venue-name'>{ venue.name }</div>
              <div className='venue-categories'>{ displayVenueCategories(venue.categories) }</div>
              <div className='venue-price'>{ venue.price }</div>
              <div className='venue-popularity'>
                <div className='venue-rating'>Rating: { venue.rating }/5</div>
                <div className='venue-review_count'>({ venue.review_count } Reviews)</div>
              </div>
            </div>
            <div className='contact-info'>
              <div className='venue-phone'>
                Phone: { venue.phone }
              </div>
              <div className='venue-location'>
                Address: { displayVenueLocation(venue.location) }
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
}

export default VenueProfile