import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemp from "./WeatherTemp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mb-1">{props.data.city}</h1>
      <h2 className="mb-3">
        <FormatDate date={props.data.date} />
      </h2>
      <div className="row">
        <div className="col-6">
          <WeatherIcons code={props.data.icon} size={50} />
          <WeatherTemp fahrenheit={props.data.temperature} />
          <h4>
            <span className="feels-like">FEELS LIKE:</span>{" "}
            <span className="feels-like-temp">
              {Math.round(props.data.feelsLike)}°
            </span>
          </h4>
        </div>
        <div className="col-6">
          <h3 className="text-capitalize">{props.data.description}</h3>
          <ul>
            <li className="high-low-temps">
              H:{Math.round(props.data.highTemp)}°{" "}
              <FontAwesomeIcon icon={faLongArrowAltUp} />
              <FontAwesomeIcon icon="fas fa-long-arrow-alt-up" /> L:
              {Math.round(props.data.lowTemp)}°{" "}
              <FontAwesomeIcon icon={faLongArrowAltDown} />
              <FontAwesomeIcon icon="fas fa-long-arrow-alt-down" />
            </li>
            <li>HUMIDITY: {props.data.humidity}%</li>
            <li>WIND: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
