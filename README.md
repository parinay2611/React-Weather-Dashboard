# React Weather Dashboard

## Description

A sleek and responsive Weather Dashboard built with React and the OpenWeatherMap API.  
Features include:  
- Real-time weather data fetching with API polling every 30 seconds  
- City search with error handling  
- Animated weather icons and temperature display  
- Responsive, modern UI with CSS Modules and smooth animations  
- Last searched city saved in local storage  
- Uses React Context API for global state management  

This project demonstrates React fundamentals and advanced concepts such as hooks, context, API integration, and UI/UX polish.

---

## Project Setup

### Prerequisites

- Node.js (v16 or newer recommended)  
- An OpenWeatherMap API key (free from https://openweathermap.org/api)

- Approach

I structured the app with separation of concerns:

Context API manages global state (city, weather data, error, units).

Separate components for SearchBar, WeatherDisplay, ErrorDisplay to keep UI modular and maintainable.

CSS Modules scope styles locally and enable animations and effects to enhance UX.

Used useEffect to handle polling the API every 30 seconds, with cleanup on unmount.

Stored last searched city in localStorage to persist user preference.
