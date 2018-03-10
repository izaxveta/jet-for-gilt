import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ItemCard from './ItemCard'

class ItemCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.items
    }
  }

  renderItemCards = () => {
    this.state.items.map((item) =>
      (<ItemCard item={ item } />)
    )
  }

  render() {
    return (
      <React.Fragment>
        { this.renderItemCards() }
      </React.Fragment>
    )
  }
}

export default ItemCollection