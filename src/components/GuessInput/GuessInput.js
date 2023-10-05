import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    handleSubmitGuess(guess);

    setGuess('');
  }

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // }

  return (
<form className="guess-input-wrapper" onSubmit={handleSubmit}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input 
  required
  minLength={5}
  maxLength={5}
  pattern="[a-zA-Z]{5}"
  title="5 letter word"
  id="guess-input" 
  type="text" 
  value={guess} 
  onChange={(event) => {
    setGuess(event.target.value.toUpperCase());
  }}/>
</form>
  )
}

export default GuessInput;
