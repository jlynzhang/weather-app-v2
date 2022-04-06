import React from "react";
import "./WeatherMain.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function WeatherMain() {
  return (
    <div className="WeatherMain">
      <form>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
        <input type="search" placeholder="Search for a city" autoFocus="on" />
      </form>
      <h1 className="mb-1">New York</h1>
      <h2 className="mb-3">Friday 6:00 PM</h2>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          />
          <span className="temperature">47</span>
          <span className="unit">°F</span>
        </div>
        <div className="col-6">
          <h3>Cloudy</h3>
          <ul>
            <li>Precipitation: 6%</li>
            <li>Humidity: 71%</li>
            <li>Wind: 3 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
