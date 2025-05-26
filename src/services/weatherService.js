import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchWeather = async (city, unit = 'metric') => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchForecast = async (city, unit = 'metric') => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
