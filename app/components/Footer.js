import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';

const Footer = ( { store } ) => (
  <div>
    <FilterLinkContainer
      store = { store }
      filter = { "SHOW_ALL" }
    >
      All
    </FilterLinkContainer>

    <FilterLinkContainer
      store = { store }
      filter = { "SHOW_COMPLETED" }
    >
      Completed
    </FilterLinkContainer>

    <FilterLinkContainer
      store = { store }
      filter = { "SHOW_ACTIVE" }
    >
      Active
    </FilterLinkContainer>
  </div>
);

export default Footer;