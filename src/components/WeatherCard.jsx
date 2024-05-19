import React from 'react'

const WeatherCard = (props) => {
  return (
    <div>
      <h2>City: {props.cityName}</h2>
      <h4>Region: {props.region}</h4>
      <p>Temperature: {props.temp}°C</p>
      <p>Humidity: {props.humidity}</p>
      <img src={`${props.icon}`} alt="" />
    </div>
  )
}

export default WeatherCard