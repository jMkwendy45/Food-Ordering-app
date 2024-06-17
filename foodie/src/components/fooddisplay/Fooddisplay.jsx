import React, { useContext } from 'react'
import '../fooddisplay/fooddisplay.css'
import { StoreContex } from '../../context/StoreContext'
import Fooditem from '../fooditem/Fooditem'
const Fooddisplay = ({category}) => {

  const {food_list} = useContext(StoreContex)


  return (
    <div className='food-display' id="food-display">
      <h2>Top dishes for you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{

            if(category==="All"||category===item.category){
                return <Fooditem key={index} id ={item._id} name={item.name}
                descritpion={item.descritpion} price={item.price} image={item.image}
               />
            }
          
        })}
      </div>
    </div>
  )
}

export default Fooddisplay
