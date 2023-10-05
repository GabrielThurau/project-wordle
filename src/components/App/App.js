import Game from '../Game';

import GuessResults from '../GuessResults/GuessResults';
import Header from '../Header';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
