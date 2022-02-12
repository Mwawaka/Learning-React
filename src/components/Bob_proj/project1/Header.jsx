import React from 'react'
import reactLogo from "/hackathon-react/src/components/logo192.png"
function Header() {
  return (
      <header>
          <nav className='nav-bar'>
              <img src={reactLogo} alt="React Logo" width={30} />
             
              <h3 className='nav--facts'>ReactFacts</h3>
              <h4 className='nav--proj'>React Course - Project1</h4>
          </nav>
      </header>
  )
}

export default Header