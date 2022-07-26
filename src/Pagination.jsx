function Pagination(props) {
  const getTotalLinks = () => {
    let links = [];
    for (let i = 1; i <= props.totalPages; i++) {
      links.push(<a className={i == props.active ? "active" : ""} onClick={()=>props.onChange(i)}>{i}</a>);
    }
    return links;
  };
  return (
    <div className="topbar-filter">
      <label>Movies per page:</label>
      <select>
        <option value="range">5 Movies</option>
        <option value="saab">10 Movies</option>
      </select>
      <div className="pagination2">
        <span>
          Page {props.active} of {props.totalPages}:
        </span>
        {getTotalLinks()}
      </div>
    </div>
  );
  }
export default Pagination;
