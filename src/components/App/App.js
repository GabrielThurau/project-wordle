import Game from '../Game';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Header from '../Header';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
      <GuessResults />
      <GuessInput />
        <Game />
      </div>
    </div>
  );
}

export default App;
