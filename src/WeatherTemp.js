import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F /
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>{" "}
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          / °C{" "}
        </span>
      </span>
    );
  }
}
