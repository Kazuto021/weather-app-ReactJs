import React, { useState, useEffect } from 'react';
import YOUR_API_KEY from './Key';
import "./App.css"
import WeatherCard from './components/WeatherCard';
function App() {
  // let depend = 1
  const [weatherData, setWeatherData] = useState("");
  const [usercity, setUsercity] = useState("");
  const [mycity, setmycity] = useState("");
  const [icon, setIcon] = useState("");
  const [region, setRegion] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadCount, setLoadCount] = useState(0);
  // usestate

  // Function to fetch weather data
  const getUserLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { coords: { latitude, longitude } } = pos
        const locationRequest = async () => {
          const locReq = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          )
          const locationData = await locReq.json()
          console.log(locationData)
          const { address: { city } } = locationData
          setWeatherData(city)
          setmycity(city)
          console.log("User's location:", city)
          fetchWeatherData(city)

        }
        locationRequest()

        console.log("lat: " + latitude, "long: " + longitude)
      })
    }
    catch (e) {
      console.log(e)
    }
  }
  const fetchWeatherData = async (city) => {
    setLoading(true);
    setLoadCount(loadCount + 1)
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}&aqi=no`
      );
      const data = await response.json();
      console.log(data)

      const { location: { name, region }, current: { temp_c, condition: { icon, text } } } = data
      setWeatherData(city);
      setmycity(name)
      setRegion(region)
      setIcon(icon)
      setHumidity(text)
      setTemperature(temp_c)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data: ', error);
      setLoading(false);
    }
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(mycity);
  };

  useEffect(() => {
    getUserLocation()
    console.log("useEffect my city:", mycity, weatherData)
    setLoadCount(loadCount + 1)
  }, []);

  return (
    <div className="wrapper">
      <div className='nested-div'>
        <h1>Weather App</h1>
        <form>
          <input
            type="text"
            placeholder="Enter city"
            value={mycity}
            onChange={(e) => setmycity(e.target.value)}
            style={{ "width": "100%", "height": "50%" }}
          />
          {loading ? (
            <p>Loading...</p>
          ) : weatherData ? (


            weatherData.length && mycity ? (
              <WeatherCard 
              cityName = {weatherData}
              region = {region}
              temp = {temperature}
              humidity = {humidity}
              icon = {icon}
              />
              // <div>

              //     <h2>City: {weatherData}</h2>
              //     <h4>Region: {region}</h4>
              //     <p>Temperature: {temperature}°C</p>
              //     <p>Humidity: {humidity}</p>
              //     <img src={`${icon}`} alt="" />
              // </div>
            ) :
              (
                <h5>City Name can not be empty.</h5>
              )



          ) : (
            <p>No data available</p>
          )}
          <button type="submit" onClick={handleSubmit}>Get Weather</button>
        </form>


      </div>

    </div>
  )
}

export default App
