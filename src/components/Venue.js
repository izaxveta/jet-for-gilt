import React, { Component } from 'react'

import VenueProfile from './VenueProfile'
import '../styles/Venue.css'

class Venue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venue: this.props.location.state.venue,
      mode: 'APPAREL',
      categories: this.props.location.state.venue.categories
    }
  }

  onClickChangeItems = (event) => {
    event.preventDefault()
    let value = event.currentTarget.innerText
    this.setState({ mode: `${value}`})
  }

  setVenueCategories() {

  }

  renderItemCategory = () => {
    if (this.state.mode === 'APPAREL') {
      return (
        <p>APPAREL</p>
      )
    } else if (this.state.mode === 'SHOES') {
      return (
        <p>SHOES</p>
      )
    } else {
      return (
        <p>ACCESSORIES</p>
      )
    }
  }

  render() {
    debugger
    return (
      <React.Fragment>
        <VenueProfile venue={ this.state.venue } />
        <div className='option-bar'>
          <div className='option-line-divider'></div>
          <div className='venue-button' id='venue-options'>
            <button type='submit' className='option' onClick={ this.onClickChangeItems }>APPAREL</button>
            <button type='submit' className='option' onClick={ this.onClickChangeItems }>SHOES</button>
            <button type='submit' className='option' onClick={ this.onClickChangeItems }>ACCESSORIES</button>
          </div>
        </div>
        { this.renderItemCategory() }

      </React.Fragment>
    )
  }
}

export default Venue