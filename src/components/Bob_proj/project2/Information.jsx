import React from 'react'
import icon from "./Icon.png"
function Information() {
  return (
      <div className='info'>
          <h1 className='h1--name'>Laura Smith</h1>
          <p className='p--name'>Frontend Developer</p>
          <a href="#" className='a--web'>laurasmith.website</a>
          <br />
          <button type='button' className='btn'>

              <span className='btn--icon'>
                  <img src={icon} alt="" />
                  <span className='btn--text'> Email</span>
              </span>
          </button>
      </div>
  )
}

export default Information