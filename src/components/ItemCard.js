import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = (props) => {
  const item = props.item

  return (
    <div className='item-container'>
      <div className='item-details'>
        <div className='image'>
          <div className='item-image'><img src={ item.image_urls.first } alt={ item.label } /></div>
          <div className='heart'></div>
        </div>
        <div className='item-info'>
          <div className='style'>
            <div className='label-name'>{ item.label }</div>
            <div className='name'>{ item.name }</div>
          </div>
          <div className='price'>
            { renderPrice(item) }
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemCard