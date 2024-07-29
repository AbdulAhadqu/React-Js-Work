// import logo from './logo.svg';
//import './App.css';
// import forms from './Components/forms';
// function App() {
//   return <>
//   <Navbar/>
//   </>
// //   return (<><h1>Food items :</h1>
// //   <Delivery_items delivery= {false}/> 
// //  <Delivery_items delivery= {true}/></>)
// // return(<>
// //    <Fooditems foods = {"Karahi"}  availibility ={true} />
// //   <Fooditems foods = {'Pulao'}  availibility ={true} />
// //   <Fooditems foods = {'Biryani'}  availibility ={true}/>
// //   <Fooditems foods = {'Pizza'}  availibility ={true} />
// //   <Fooditems foods = {'Shawarma'}  availibility ={false}/>
// //   <Fooditems foods = {'Fries'}  availibility ={false}/>
// //  </> ) 
// }

// export default App;
// // function Fooditems ({foods}, {availibility}){
// //   if (availibility === true){
// //     return (<p> {foods}  Yes this item is available </p>)
    
// //   }
// //    else{return (<p> {foods}; We are Sorry for that </p>)}
// // }
// // function Delivery_items ( props){
// //   let delivery = props.delivery;
// //   if (delivery=== true){
// //     return <><button id='btn-canceldelivery'>Cancel Delivery</button></>
// //   }
// //   else{
// //     return <><button>Deliver It</button></>
// //   }
// // }
// //  ==============Navbar==============
// function Navbar (){
//   return <>
//   <nav>
//   <ul>
//     <li><a href="/" class='navbar' >Home</a></li>
//     <li><a href="/about" class='navbar'>About</a></li>
//     <li><a href="/contact" class='navbar'>Contact</a></li>
//     <li><a href="/products" class='navbar'>Products</a></li>
//     <button href='www.google.com' id='btn-signup'>Sign Up</button>
//   </ul>
  
// </nav>
  
//   </>
// }
import React, { useEffect, useState } from 'react';


function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  
  const fetchWeatherData = async () => {
    try {
      setTimeout(()=>
       fetch (`http://api.weatherapi.com/v1/current.json?key=52f30a624ad4441a96074440241105&q=${city}&aqi=no
     `).then(res => res.json()).then(data => setWeatherData(data))
    ,1000);
  } catch (error) {
      console.error(error);
      console.log("erooooooorrr");
      setWeatherData(null);
    }
    clearTimeout();
  };
  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === 'Enter') {
        fetchWeatherData();
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [city,fetchWeatherData]);

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
<button onClick={fetchWeatherData} >Get Weather</button>
      </div>
      {weatherData && (
        <div >
          <div><strong >{weatherData.location.name }</strong></div>
          <div>Region: {weatherData.location.region}</div>
          <div>Country: {weatherData.location.country}</div>
          <div>Last Update: {weatherData.location.localtime}</div>
          <div>Temperature C: {weatherData.current.temp_c}</div>
          <img src={weatherData.current.condition.icon} alt='Weather Pic'/>
        </div>
      
      )}
    </div>
  );
}

export default WeatherApp;
