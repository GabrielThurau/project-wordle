import React from 'react';
import { useState } from 'react';

function SelectDemo() {

  const [movie, setMovie] = useState('The Notebook');

  function handleChange(e) {
    setMovie(e.target.value);
  }

  return (
    <>
    <h1>Best Romantic Movies</h1>
    <h2>{movie}</h2>
    <select name="romantic-movies" id="rom-movies" onChange={handleChange}>
    <option value="The Notebook">The Notebook</option>
    <option value="Walk to remember">A Walk to Remember</option>
    <option value="Bloodsport">Bloodsport</option>
    <option value="Twilight">Twilight</option>
</select>
 </>
  )
}

export default SelectDemo;
