import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';

const Navigation = ( props, { store } ) => (
  <div className="navigation-container">
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

Navigation.contextTypes = {
  store: React.PropTypes.object
};

export default Navigation;
