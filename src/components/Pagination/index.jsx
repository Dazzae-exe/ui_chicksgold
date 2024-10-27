import React from 'react';
import '../../styles/pagination/index.css';

function Pagination() {
  const [activePage, setActivePage] = React.useState(1);

  return (
    <div className="pagination">
      {activePage > 1 ? <button className="prev-page" onClick={() => setActivePage(activePage - 1)}>{'<'}</button> : ""}
      <button className="page-number active">{activePage}</button>
      <button className="page-number" onClick={() => setActivePage(activePage + 1)}>{activePage + 1}</button>
      <span className="ellipsis">...</span>
      <button className="page-number" onClick={() => setActivePage(activePage + 5)}>{activePage + 5}</button>
      <button className="next-page" onClick={() => setActivePage(activePage + 1)}>{'>'}</button>
    </div>
  );
}

export default Pagination;