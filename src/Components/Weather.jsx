import React, { useState } from 'react'
import axios from 'axios'
import '../Styles/weather.css'
import ShowTemp from './ShowTemp';
const Weather = () => {

    //created usestate for weather app 
    const [data,setData]=useState({
        description:"",
        temp:0,
        temp_max:0,
        temp_min:0,
        humidity:0,
        sunrise:0,
        country:"",

    });
    const  [city,setCity]=useState("")  
    
    // here the function run when clicked on button and we used axios library to get data using http request and setting data to the varaiable we have created
    const handleClick=()=>{
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9235c20ec85f288d05270560dd6ee1fc`).then((response)=>{
   setData({
    description:response.data.weather[0].description,
    temp:response.data.main.temp,
    temp_max:response.data.main.temp_max,
    temp_min:response.data.main.temp_min,
    humidity:response.data.main.humidity,
    sunrise:response.data.main.sunrise,
    sunset:response.data.main.sunset,
    country:response.data.sys.country,
   })
})
    }
 
  return (
    <>
    <div className="container weathermainContainer">
        <h2 className='text-center'>
            Weather App
        </h2>
        <div className="innerconatinerweather">
        <input type="text" className='form-control' value={city} onChange={(e)=>{
           setCity( e.target.value)
        }} />
        <button className='btn btn-primary' type='submit' onClick={handleClick}>get temp</button>
        </div>
        <div className="container weatherdata">
            {data.temp}
        </div>
    </div>

    <ShowTemp data={data}/>
    </>
  )
}

export default Weather