import React, { useState } from 'react'
import '../home/home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'

const Home = () => {
 const [category,setCategory] = useState("All")


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
