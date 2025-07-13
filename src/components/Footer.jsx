import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="footer">
    <div className="footer-content">
      <h1>Tasty Recipe</h1>
      <p>Simple, delicious meals made easy.</p>

      <div className="footer-social">
       <FaInstagram size={24}/>
       <FaFacebook size={24}/>
       <FaYoutube size={24}/>
       <FaTwitter size={24}/>
      </div>

      <p className="footer-note">© 2025 Tasty Recipe. All rights reserved.</p>
    </div>
  </footer>
    </>
  )
}

export default Footer