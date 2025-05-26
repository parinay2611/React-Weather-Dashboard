// // src/App.jsx
// import React, { useState, useEffect, useContext } from "react";
// import { fetchWeather } from "./api/fetchWeather";
// import { WeatherContext, WeatherProvider } from "./context/WeatherContext";
// import SearchBar from "./components/SearchBar";
// import WeatherDisplay from "./components/WeatherDisplay";
// import ErrorDisplay from "./components/ErrorDisplay";

// const AppContent = () => {
//   const { city, unit, setWeatherData, setError, weatherData, error } =
//     useContext(WeatherContext);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     let intervalId;

//     const getWeather = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchWeather(city, unit);
//         setWeatherData(data);
//         setError(null);
//       } catch (err) {
//         setError("City not found or network error.");
//         setWeatherData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getWeather();
//     intervalId = setInterval(getWeather, 30000);

//     return () => clearInterval(intervalId);
//   }, [city, unit, setWeatherData, setError]);

//   return (
//     <>
//       <SearchBar />
//       <ErrorDisplay />
//       {loading ? (
//         <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>
//       ) : (
//         <WeatherDisplay />
//       )}
//     </>
//   );
// };

// const App = () => (
//   <WeatherProvider>
//     <AppContent />
//   </WeatherProvider>
// );

// export default App;


//Second
// src/App.jsx
import React, { useState, useEffect, useContext } from "react";
import { fetchWeather } from "./api/fetchWeather";
import { WeatherContext, WeatherProvider } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ErrorDisplay from "./components/ErrorDisplay";

import styles from "./App.module.css";

const AppContent = () => {
  const { city, unit, setWeatherData, setError } = useContext(WeatherContext);
  const { weatherData, error } = useContext(WeatherContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let intervalId;

    const getWeather = async () => {
      try {
        setLoading(true);
        const data = await fetchWeather(city, unit);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError("City not found or network error.");
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
    intervalId = setInterval(getWeather, 30000);

    return () => clearInterval(intervalId);
  }, [city, unit, setWeatherData, setError]);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>🌤️ Weather Dashboard</h1>
      <SearchBar />
      <ErrorDisplay />
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        weatherData && <WeatherDisplay />
      )}
    </div>
  );
};

const App = () => (
  <WeatherProvider>
    <AppContent />
  </WeatherProvider>
);

export default App;
