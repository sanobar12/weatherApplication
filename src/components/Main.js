import React,{useState} from "react";
import Header from "./Header";
import DataTime from "./DateTime";
import Tagline from "./Tagline";
import axios from "axios";
import Context from "./Context";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Error from "./Error";
import Footer from "./Footer";
import "../index.css"; 

const Main = () => {
    // weather name of a state (update th  e state)
    const [weather, setWeather] = useState()
    const [city, setCity] = useState()
    const [error, setError] = useState()
    // e is event object in javascript
  const api_call = async e => {
    //   when form submit then refresh it by this method
      e.preventDefault()
      const location = e.target.elements.location.value
      if (!location) return setError("Please enter the name of the city"), setWeather(null)
    const API_KEY = "29fcb65c52166abba3231ca3d1b04c64";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const requst = axios.get(url);
    const response = await requst;
    setWeather(response.data.main);
    setCity(response.data.name)
    // setCity("");
    console.log(response)
}; 
 console.log (weather)  
   
  return (
    <div className="main ">
      <Header/>
      <Content> 
        <DataTime/>
        <Tagline/>
        <Context.Provider value={{api_call, weather, city, error}}>
        <WeatherSearch/>
        {weather && <WeatherData/>}
        {error && <Error error={error}/>}
        </Context.Provider>
        <Footer/>
      </Content>
    </div>
  );
};
export default Main;
 