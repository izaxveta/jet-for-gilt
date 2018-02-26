import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  updateQuery = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  render() {
    return (
      <div className='search-bar'>
        <form>
          <input required className='search-field' placeholder='City/Zip' onChange={ this.updateQuery.bind(this, 'query') }/>
          <Link to={{ pathname: '/search', state: this.state.query}} className='search-button'>GO</Link>
        </form>
      </div>
    )
  }
}

export default SearchBar