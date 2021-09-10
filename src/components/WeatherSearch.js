import React,{useContext} from "react";
import Context from "./Context";

const WeatherSearch = () => {
 const {api_call} = useContext(Context)
  return (
    <div className="weather-search">
      <form onSubmit={api_call} className="weather-search__form">
        <input name ="location" type="text" autoComplete="off" className="weather-app__input "/>
          <button className="weather-search__button">&rarr;</button>
      </form>
    </div>
  );
};

export default WeatherSearch;
