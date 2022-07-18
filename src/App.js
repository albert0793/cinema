// import logo from './logo.svg';
import './App.css';
import Wrapper from './Wrapper';
import Movie from './Movie';
import Movies from './Movies.json';

function App() {
  return (
    <div className="App">
      <Wrapper>
        {Movies.map(movie =>
          <Movie title={movie.name} img={movie.img} description={movie.description} rating={movie.Rating} />
          )}
      </Wrapper>
    </div>
  );
}

export default App;
