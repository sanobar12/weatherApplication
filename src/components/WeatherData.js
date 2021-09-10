import React, {useContext} from "react";
import Context from "./Context";

const WeatherData = () => {
    const {weather,city} = useContext(Context)
    const {temp, humidity,pressure}= weather
    
  return (
    <div className="weather-info">
      <p className="weather__tagling">
        Weather forecost for 
         <span className="weather-data__city"> {city}</span>
      </p>
      <div className="weather-data__box"> 
      <div className="one">
        <span className="weather-dataa__property">
          <p className="weather-da__title">Temperature</p>
          <p className="weather-da__value">{temp}</p>
        </span>
        </div>
        <div className="two">
        <span className="weather-dataa__property">
          <p className="weather-da__title">Humidity</p>
          <p className="weather-da__value">{humidity}</p>
        </span>
        </div>
        <div className="three">
        <span className="weather-dataa__property">
          <p className="weather-da__title">Pressure</p>
          <p className="weather-da__value">{pressure}</p>
        </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
