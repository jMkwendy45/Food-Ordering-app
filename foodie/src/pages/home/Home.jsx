import React, { useState } from 'react'
import '../home/home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'
import { Appdowload } from '../../components/appdownload/Appdowload'

const Home = () => {
 const [category,setCategory] = useState("All")


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category} setCategory={setCategory}/>
      <Appdowload/>
    </div>
  )
}

export default Home
