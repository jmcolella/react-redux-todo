import React from 'react';

const FilterLink = (
  { active,
    filterClick,
    children
  }
) => {
  if ( active ) {
    return <span>{ children }</span>
  }
  return (
    <a href="#"
       onClick={ e => {
         e.preventDefault();
         filterClick();
       }}
    >
      {children}
    </a>
  )
}

export default FilterLink;