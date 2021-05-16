import React, { useContext, useState } from 'react'
import Context from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';


const Weather = ({ value }) => {


  let weatherData = useContext(Context)
  // setState(weatherData.temp, weatherData.temp_min,weatherData.temp_max)

  // console.log(weatherData[0].temp);
  let name1 = weatherData.name







  const changeData = (e) => {
    e.preventDefault();

    const data = e.target.value;
    // weatherData.name = data;

    value(data)




  }





  return (
    <>
      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">Weather App</a>
          <form className="d-flex mx-auto">`
            <input className="form-control me-2" type="search" placeholder="Enter City Name" onChange={changeData} aria-label="Search" />
          </form>
        </div>
      </nav>

      <p style={{ textAlign: "center" }}>CityName: {name1}</p>

      {Object.keys(weatherData).map((data) => {
        // console.log(data.name);
        const data1 = weatherData[data]
        console.log(data1);
        console.log(data);
        const ind = Math.random()
        // console.log(data1);


        // console.log(data1.temp);
        return (

          <>
            
            <p key={ind + 1} style={{ textAlign: "center" }}>{data1.temp} </p>
            <p key={ind - 1} style={{ textAlign: "center" }}>{data1.temp_min}</p>
            <p key={ind} style={{ textAlign: "center" }}>{data1.temp_max}</p>

          </>

        )




      }


      )
      }































































    </>


  )

}


export default Weather
