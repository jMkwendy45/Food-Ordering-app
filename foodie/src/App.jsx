import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
     <div className='app'>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
         {/* <Route path='/cart' element={<Cart/>} /> 
         <Route path='/order' element={<PlaceHolder />}/> */}
      </Routes>
    </div>
    <Footer/>
    </>
  )
   
}

export default App
