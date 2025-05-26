// import React, { useContext, useState } from 'react';
// import styled from 'styled-components';
// import { WeatherContext } from '../context/WeatherContext';

// const SearchContainer = styled.div`
//   margin: 20px;
//   display: flex;
//   justify-content: center;
// `;

// const Input = styled.input`
//   padding: 10px;
//   font-size: 1rem;
//   width: 200px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   font-size: 1rem;
//   margin-left: 10px;
//   cursor: pointer;
// `;

// const SearchBar = () => {
//   const { setCity } = useContext(WeatherContext);
//   const [input, setInput] = useState('');

//   const handleSearch = () => {
//     if (input.trim() !== '') {
//       setCity(input.trim());
//       setInput('');
//     }
//   };

//   return (
//     <SearchContainer>
//       <Input
//         type="text"
//         placeholder="Enter city name"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//       />
//       <Button onClick={handleSearch}>Search</Button>
//     </SearchContainer>
//   );
// };

// export default SearchBar;


//second
// src/components/SearchBar.jsx
import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const { city, setCity } = useContext(WeatherContext);
  const [input, setInput] = useState(city);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) setCity(input.trim());
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Search city form">
      <input
        type="text"
        className={styles.input}
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="City name"
        required
      />
      <button type="submit" className={styles.button} aria-label="Search">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
