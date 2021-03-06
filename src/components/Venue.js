import React, { Component } from 'react'

import VenueProfile from './VenueProfile'
import ItemCollection from './ItemCollection'
import { getAllItems } from '../utils/requests'
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

  renderItemCards() {
    if (!this.state.items) {
      return (
        <div className="loader"></div>
      )
    } else {
      return (
        <React.Fragment>
          { this.renderItems }
        </React.Fragment>
      )
    }
  }

  renderItems = () => {
    return (
      <ItemCollection items={ this.state.items } />
    )
  }

  toggleItemCategory() {
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

  setItems = (itemResults) => {
    this.setState({ items: itemResults })
  }

  componentWillMount() {
    getAllItems(this.state.categories)
      .then((items) => this.setItems(items))
      .catch((error) => console.error({ error }))
  }

  render() {
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
        { this.renderItemCards() }
      </React.Fragment>
    )
  }
}

export default Venue