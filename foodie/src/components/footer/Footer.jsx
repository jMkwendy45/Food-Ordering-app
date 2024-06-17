import React from 'react'
import '../footer/footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
            <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt=""/>
            <img src={assets.twitter_icon} alt=""/>
            <img src={assets.linkedin_icon} alt=""/>
            </div>
        </div>
         <div className="footer-content-right">
             <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
             </ul>
         </div>
         <div className="footer-content-centre">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+234-81-198-63972</li>
                <li>duwend46@gmail.com</li>    
             </ul>
         </div>
      </div>
      <p className='footer-copyright'>Copyright  2024 @ Duru.com -All Right Reserved</p>
    </div>
  )
}

export default Footer
