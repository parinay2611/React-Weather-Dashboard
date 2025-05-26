import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(() => localStorage.getItem('city') || 'Bengaluru');
  const [unit, setUnit] = useState(() => localStorage.getItem('unit') || 'metric'); // 'metric' or 'imperial'
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Save city and unit to localStorage
  useEffect(() => {
    localStorage.setItem('city', city);
    localStorage.setItem('unit', unit);
  }, [city, unit]);

  return (
    <WeatherContext.Provider value={{ city, setCity, unit, setUnit, weatherData, setWeatherData, error, setError }}>
      {children}
    </WeatherContext.Provider>
  );
};
