import React from 'react';

function GameOverBanner({gameStatus}) {
 if (gameStatus === 'won') {
  return(
    <div className="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong>3 guesses</strong>.
  </p>
</div>
  )
 }
}

export default GameOverBanner;
