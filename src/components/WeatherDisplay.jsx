// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import { WeatherContext } from '../context/WeatherContext';

// const WeatherContainer = styled.div`
//   text-align: center;
//   margin: 20px;
// `;

// const WeatherDisplay = () => {
//   const { weatherData, unit } = useContext(WeatherContext);

//   if (!weatherData) return null;

//   const { name, main, weather, wind } = weatherData;
//   const temperatureUnit = unit === 'metric' ? '°C' : '°F';
//   const windSpeedUnit = unit === 'metric' ? 'm/s' : 'mph';

//   return (
//     <WeatherContainer>
//       <h2>{name}</h2>
//       <p>{weather[0].description}</p>
//       <img
//         src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
//         alt={weather[0].description}
//       />
//       <p>Temperature: {main.temp} {temperatureUnit}</p>
//       <p>Humidity: {main.humidity}%</p>
//       <p>Wind Speed: {wind.speed} {windSpeedUnit}</p>
//     </WeatherContainer>
//   );
// };

// export default WeatherDisplay;


//second
// src/components/WeatherDisplay.jsx
import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "./WeatherDisplay.module.css";

const WeatherDisplay = () => {
  const { weatherData, unit } = useContext(WeatherContext);

  if (!weatherData) return null;

  const {
    main: { temp, humidity },
    wind: { speed },
    weather,
    name,
  } = weatherData;

  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  const tempUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "mph";

  return (
    <div className={styles.card} aria-live="polite">
      <h2 className={styles.cityName}>{name}</h2>
      <img
        className={styles.icon}
        src={iconUrl}
        alt={weather[0].description}
        loading="lazy"
      />
      <p className={styles.temp}>
        {Math.round(temp)}
        {tempUnit}
      </p>
      <p className={styles.description}>{weather[0].description}</p>
      <div className={styles.details}>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {speed} {windUnit}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
