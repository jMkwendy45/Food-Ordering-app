import React from 'react'
import '../fooditem/fooditem.css'
import { assets } from '../../assets/assets'}

const Fooditem = ({id,name,price,descritpion,image}) => {

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img  className='food-item-image' src={image} alt=''/>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts}/>
        </div>
      </div>
    </div>
  )
}

export default Fooditem
