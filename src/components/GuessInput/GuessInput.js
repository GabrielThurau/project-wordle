import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
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
  value={tentativeGuess} 
  onChange={(event) => {
    setTentativeGuess(event.target.value.toUpperCase());
  }}/>
</form>
  )
}

export default GuessInput;
