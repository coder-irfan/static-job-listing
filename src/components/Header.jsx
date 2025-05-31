import React from 'react'

function Header() {
  return (
    <header className="header">
      <img src="images/bg-header-mobile.svg" alt='bg-mobile' className='header__mobile-bg'/>
      <img src="images/bg-header-desktop.svg" alt="bg-desktop" className='header__desktop-bg'/>
    </header>
  )
}

export default Header;