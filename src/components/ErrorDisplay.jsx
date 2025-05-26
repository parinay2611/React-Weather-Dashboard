// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import { WeatherContext } from '../context/WeatherContext';

// const ErrorContainer = styled.div`
//   color: red;
//   text-align: center;
//   margin: 20px;
// `;

// const ErrorDisplay = () => {
//   const { error } = useContext(WeatherContext);

//   if (!error) return null;

//   return <ErrorContainer>{error}</ErrorContainer>;
// };

// export default ErrorDisplay;


//second
// src/components/ErrorDisplay.jsx
import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "./ErrorDisplay.module.css";

const ErrorDisplay = () => {
  const { error } = useContext(WeatherContext);

  if (!error) return null;

  return <p className={styles.error} role="alert">{error}</p>;
};

export default ErrorDisplay;
