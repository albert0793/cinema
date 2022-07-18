import { useState } from 'react';
import Movies from './Movies.json';
function Pagination(props) {
    const totalMovies = Movies.length;
    const [active, setActive] = useState(1);
    const getTotalLinks = () => {
        let links = [];
        for (let i = 1; i <= totalMovies; i++) {
            links.push(<a className={i == active ? 'active' : ''} onClick={()=> setActive(i)}>
            {i}
          </a>);
        }
        return links;
    }
  return (
    <div className="pagination2">
      <span>Page {active} of { totalMovies }:</span>
      { getTotalLinks() }
    </div>
  );
}


export default Pagination;