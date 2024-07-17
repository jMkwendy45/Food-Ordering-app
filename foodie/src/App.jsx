import React,{useState}from 'react'
import Navbar from './components/navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import LoginPopup from './components/loginpopup/LoginPopup'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup/>:<> </>}
     <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
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
