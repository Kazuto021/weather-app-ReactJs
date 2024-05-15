import React, { useState, useEffect } from 'react';
import YOUR_API_KEY from './Key';
import "./App.css"
function App() {
  // let depend = 1
  const [weatherData, setWeatherData] = useState("");
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);
  // usestate

  // Function to fetch weather data
  // const getUserLocation = () =>{
  //   Geolocation.
  // }
  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}&aqi=no`
      );
      const data = await response.json();
      console.log(await data)
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data: ', error);
      setLoading(false);
    }
  };
  useEffect( () => {
    setLoading(true)
    const fetchDefault = async (city="jaipur")=>{
      try{
        const myrequest = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=da730f2705f248b09df95202241505&q=${city}&aqi=no`
        )
        const data2 = await myrequest.json()
  
        const {location:{name , region}, current:{condition:{icon}} } = data2
        setWeatherData(data2)
        setCity(name)
        setRegion(region)
        setIcon(icon)
        console.log(await data2)
        setLoading(false)      
      }
      catch(e){
        console.log(e)
        setLoading(false)
      }
      
    }
    fetchDefault()
  }, []);
  // useEffect(() => {
  //   console.log(weatherData,icon,city,region)

  // }, [weatherData]);
  // console.log(loading)

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  

  return (
    <div className="wrapper">
      <div className='nested-div'>
        <h1>Weather App</h1>
        <form>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{"width":"100%","height":"50%"}}
          />
          <button type="submit" onClick={handleSubmit}>Get Weather</button>
        </form>
        

        {loading ? (
          <p>Loading...</p>
        ) : weatherData ? (
          <div>
            <h2>City: {weatherData.location.name}</h2>
            <h4>Region: {weatherData.location.region}</h4>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Humidity: {weatherData.current.condition.text}</p>
            <img src={`${weatherData.current.condition.icon}`} alt="" />
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>

    </div>
  )
}

export default App
