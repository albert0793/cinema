import { useState } from 'react';
import './App.css';
import Wrapper from './Wrapper';
import Movie from './Movie';
import Movies from './Movies.json';
import Pagination from './Pagination';
function App() {
  const perView = 4;
  let totalMovies = Movies.length;
  const pages = Math.ceil(totalMovies / perView);
  const [active, setActive] = useState(1);
  const movieList = Movies.slice((active - 1) * perView, active * perView);
  return (
    <div className="App">
      <Wrapper>
        {movieList.map(movie =>
          <Movie title={movie.name} img={movie.img} description={movie.description} rating={movie.Rating} />
          )}
        <Pagination total={totalMovies}  active={active} onChange={(i)=>{setActive(i)}} totalPages={pages}/>
      </Wrapper>
    </div>
  );
}

export default App;
