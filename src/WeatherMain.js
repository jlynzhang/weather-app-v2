import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./WeatherMain.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

export default function WeatherMain(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function search() {
    const apiKey = "0cd6606c8a21838ee3d658a5afde4449";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function ForMyLocation(position) {
    let apiKey = "0cd6606c8a21838ee3d658a5afde4449";
    let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;

    axios.get(`${apiUrl2}&appid=${apiKey}`).then(handleResponse);
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(ForMyLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherMain">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
          <input
            type="search"
            placeholder="Search for a city"
            autoFocus="on"
            onChange={handleCityChange}
          />
        </form>
        <div className="nav-btn-center">
          <button className="nav-btn" onClick={getLocation}>
            <FontAwesomeIcon icon={faLocationArrow} />
            <FontAwesomeIcon icon="fas fa-location-arrow" /> For My Location
          </button>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
