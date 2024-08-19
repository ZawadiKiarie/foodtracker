import React from 'react';
import '../HamburgerMenu/HamburgerMenu.css'

const HamburgerMenu = ({ onClick }) => {
  return (
    <div className='hamburger' onClick={onClick}>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
    </div>
  )
}

export default HamburgerMenu;