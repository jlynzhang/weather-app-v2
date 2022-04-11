import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function ForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="forecast-day">{day()}</div>
      <WeatherIcons code={props.data.weather[0].icon} size={36} />
      <div className="forecast-temperatures">
        <span className="forecast-temp-max">{maxTemp()}</span>{" "}
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
