import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import App from '../App'
import WeatherCard from '../components/WeatherCard'
const MainRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={App}/>
        <Route path="/weather" Component={WeatherCard}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MainRouter