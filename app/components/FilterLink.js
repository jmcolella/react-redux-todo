import React from 'react';

const FilterLink = (
  { active,
    filterClick,
    children
  }
) => {
  if ( active ) {
    return (
      <div className="individual-filter-link">
        <span className="active-link">{ children }</span>
      </div>
    )
  }
  return (
    <div className="individual-filter-link">
      <a href="#"
         onClick={ e => {
           e.preventDefault();
           filterClick();
         }}
      >
        {children}
      </a>
    </div>
  )
}

export default FilterLink;
