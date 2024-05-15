import React from 'react'
import "./App.scss"
const App = () => {
  return (
    <div className='main-div'>
    
    <nav className=''>
      <div className="site-info">
        <img className="logo" src="logo.png" alt="" />
        <div className="vertical-line"></div>
        <div className='site-name'>
          <h4>Jainson Corp</h4>
        </div>
      </div>
      <div className="page-sections">
        <div className="page-section">Home</div>
        {/* <div className="page-section" >Services</div> */}
        <select name="Services" id="">

          <option value="" selected>Services</option>
          <option value="">Web Development</option>
          <option value="">Designing</option>
          <option value="">Digital Marketing</option>
        </select>
        <div className="page-section">Contact</div>
        <div className="page-section">About</div>
        <div className="page-section" >T&C</div>
        {/* <div className="page-section"></div> */}
        
      </div>
    </nav>
    </div>
  )
}

export default App