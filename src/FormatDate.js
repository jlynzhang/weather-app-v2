import React from "react";

export default function FormatDate() {
  let timeNow = new Date();
  let convertedDay = determineDay(timeNow.getDay());
  let convertedHour = convertHour(timeNow.getHours());
  let convertedMinutes = convertMinutes(timeNow.getMinutes());

  let am_pm = determineAM_PM(timeNow.getHours());

  let formattedDate = `${convertedDay} ${convertedHour}:${convertedMinutes} ${am_pm}`;

  function determineDay(day) {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function convertHour(hour) {
    let hours = [
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,
    ];
    return hours[hour];
  }

  function convertMinutes(minutes) {
    if (minutes < 10) {
      return `0${minutes}`;
    } else {
      return `${minutes}`;
    }
  }

  function determineAM_PM(hour) {
    if (hour <= 11) {
      return "AM";
    } else {
      return "PM";
    }
  }

  return (
    <div>
      <span className="last-updated">Last Updated:</span> {formattedDate}
    </div>
  );
}
