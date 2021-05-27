import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from './Images/cloud.gif'
import Image2 from './Images/sunny.jpeg'


const Weather = () => {


  const [weather, setWeather] = useState();
  const [city, setCity] = useState("karachi")
  const [status,setStatus] = useState();
  const currDate = new Date().toLocaleDateString();
  let currTime = new Date().toLocaleTimeString();
  const [time,setTime] = useState(currTime)
  const updateTime =()=>{
    currTime = new Date().toLocaleTimeString()
    setTime(currTime)


  }
  setInterval(updateTime,1000)
  useEffect(() => {
    const api = async () => {
      try{
      const url =  (`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=92cd3f11a062a987973cf8c8cd53329e`)
      const fetchUrl = await fetch(url)
      const dataJson = await fetchUrl.json();
       
          
            setWeather(dataJson.main)
            setStatus(dataJson.weather[0])


          



    
    
    }catch(e){
        console.log(e);
      }
      
      
    }
    api();
    

  }, [city])




// console.log(weather);








  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid bg-dark">
          <a href="/" className="navbar-brand mx-auto text-white bg-dark">Weather App by Rameez</a>
         
        </div>
      </nav>
      <div className="card bg-dark mt-3" style={{margin:"0 auto",width:"18rem"}}>
  
      <form className="d-flex mx-auto bg-dark">`
            <input className="form-control me-2" type="search" placeholder="Enter City Name" onChange={(e)=>{setCity(e.target.value)}}  aria-label="Search" />
          </form>
         
  {  !weather || !status ?(<p className="text-center bg-dark">Data not Found</p>) :(
    <>
{status.main !== "Clouds" ? <img src={Image2} className="card-img-top" alt="Sunny"></img> :
<img src={Image1} className="card-img-top" alt="Clouds"></img>

}
  
  <div className="card-body bg-dark">
  
    <h5 className="card-title text-white bg-dark text-center mt-1">City: {city}</h5>
    <p className="text-center bg-dark text-white">{currDate}</p>
    <p className="text-center bg-dark text-white">{time}</p>
    <p className="card-text text-white bg-dark text-center">
     Temparaute: {weather.temp}&#8451;
    </p>
    <p className="card-text text-white bg-dark text-center">
    Minimum-Temparaute: {weather.temp} &#8451;
    </p><p className="card-text text-white bg-dark text-center">
     Maximum-Temparaute: {weather.temp}&#8451;
    </p>
  
  
  
  </div>
  </>
  )
}
</div>
      
</>
  )}
export default Weather
