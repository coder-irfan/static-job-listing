import React, { useState } from 'react';
import Filtered from './Filtered';
import Items from './Items';

function JobBoard() {
  const [filters, setFilters] = useState([]);

  return (
    <>
      <Filtered filters={filters} setFilters={setFilters} />
      <Items filters={filters} setFilters={setFilters} />    
    </>
  );
}

export default JobBoard;