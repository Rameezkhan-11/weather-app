import React, { useState,useEffect} from 'react';
import './App.css';
import Context from './Context';
import Weather from './Weather';
function App() {
const [weather, setWeather] = useState([{}]);
const [city , setCity] = useState("karachi")

useEffect(() => {
  const api = async ()=>{
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=92cd3f11a062a987973cf8c8cd53329e`) 
    const dataJson = await data.json();
    
    
  
    
    setWeather(dataJson )
  }
  api();

},[city])  

return (
 <>
<Context.Provider value={weather}>

<Weather value={setCity}/>


</Context.Provider>



 </>
  );
}

export default App;
