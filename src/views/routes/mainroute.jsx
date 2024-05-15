import React from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import App from '../../App'
const mainroute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='' Component={App}/>
 
    </Routes>
    </BrowserRouter>
  )
}

export default mainroute