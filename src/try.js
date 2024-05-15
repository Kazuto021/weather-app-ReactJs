// const apiKey= "8cdf78ad7e8d8580d15c492f14d7f742"
// async function apiRequest({name,lat,lon}) {
//     let myresponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
//     console.log(myresponse)
// }

// import apiKey from "./Key";

// async function geoLocationRequest(cityName="Delhi"){
//     var limit = 5
//     const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}&unit=metric`)

//     return geoResponse.json()
    
// }
// const EvaluateResponse =async ({name , lat , lon}) => {
//     console.log(name,lat,lon)
//     return destructFields={
//         name,
//         lat,
//         lon
//     }
// }
// document.addEventListener("DOMContentLoaded", async()=>{
//     const resp= await geoLocationRequest(); 
//     const package = EvaluateResponse(resp[0])
//     apiRequest(package)
// })

const API_KEY="nh5233qmt2ovMRcNSCbluXUSFjfYUmwt"

const options = {method: 'GET', headers: {accept: 'application/json'}};
var cityName = "Jaipur"
const weatherForecastRequest = async (name) => {
    const myresponse = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${name}&apikey=${API_KEY}`, options)
    return myresponse.json()
} 
const  EvaluteWeatherResponse= async ({values:{humidity,temperature,uvIndex,visibility,windSpeed}}) => {
    return  package={
        cityName,
        humidity,
        temperature,
        uvIndex,
        visibility,
        windSpeed
    }
}

document.addEventListener("DOMContentLoaded",async ()=>{
    const forecastData = await weatherForecastRequest()
    const {timelines:{minutely}}=forecastData
    const firstQuerymatch = minutely[0]
    let weatherDetails =await EvaluteWeatherResponse(firstQuerymatch)
    console.log(weatherDetails)
})
