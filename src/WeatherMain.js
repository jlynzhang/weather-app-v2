import React, { useState } from "react";
import axios from "axios";
import "./WeatherMain.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function WeatherMain(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Friday 6:00 PM",
      description: response.data.weather[0].description,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/cloudy.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherMain">
        <form>
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
          <input type="search" placeholder="Search for a city" autoFocus="on" />
        </form>
        <h1 className="mb-1">{weatherData.city}</h1>
        <h2 className="mb-3">{weatherData.date}</h2>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>
          <div className="col-6">
            <h3 className="text-capitalize">{weatherData.description}</h3>
            <ul>
              <li>Precipitation: 6%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0cd6606c8a21838ee3d658a5afde4449";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
