import { useState } from 'react';
import Movies from './Movies.json';
function Pagination(props) {
    const totalMovies = Movies.length;
    const [active, setActive] = useState(1);
    const moviesPerView = 4;
    const totalPages = Math.ceil(totalMovies / moviesPerView)
    const getTotalLinks = () => {
        let links = [];
        for (let i = 1; i <= totalPages; i++) {
            links.push(<a className={i == active ? 'active' : ''} onClick={()=> setActive(i)}>
            {i}
          </a>);
        }
        return links;
    }
  return (
    <div className="pagination2">
      <span>Page {active} of { totalPages }:</span>
      { getTotalLinks() }
    </div>
  );
}


export default Pagination;