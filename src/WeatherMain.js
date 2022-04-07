import React, { useState } from "react";
import FormatDate from "./FormatDate";
import axios from "axios";
import "./WeatherMain.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

export default function WeatherMain(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      highTemp: response.data.main.temp_max,
      lowTemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
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
        <h2 className="mb-3">
          <FormatDate date={weatherData.date} />
        </h2>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°F</span>
            <h4>
              <span className="feels-like">FEELS LIKE:</span>{" "}
              <span className="feels-like-temp">
                {Math.round(weatherData.feelsLike)}°
              </span>
            </h4>
          </div>
          <div className="col-6">
            <h3 className="text-capitalize">{weatherData.description}</h3>
            <ul>
              <li className="high-low-temps">
                H:{Math.round(weatherData.highTemp)}°{" "}
                <FontAwesomeIcon icon={faLongArrowAltUp} />
                <FontAwesomeIcon icon="fas fa-long-arrow-alt-up" /> L:
                {Math.round(weatherData.lowTemp)}°{" "}
                <FontAwesomeIcon icon={faLongArrowAltDown} />
                <FontAwesomeIcon icon="fas fa-long-arrow-alt-down" />
              </li>
              <li>HUMIDITY: {weatherData.humidity}%</li>
              <li>WIND: {Math.round(weatherData.wind)} mph</li>
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
