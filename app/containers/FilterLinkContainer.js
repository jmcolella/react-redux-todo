import React, { Component } from 'react';
import { setVisibilityFilter } from '../actions/todo_actions';
import FilterLink from '../components/FilterLink';

class FilterLinkContainer extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe( () =>
      this.forceUpdate()
    )
  }
  componentWillUnmount() {
    this.unsubscribe;
  }
  render() {
    const { store, filter, children } = this.props;
    const state = store.getState();
    return (
      <FilterLink
        active = { filter === state.visibilityFilter }
        store = { store }
        filterClick = { () => {
          store.dispatch( setVisibilityFilter( filter ) );
        }}
      >
        {children}
      </FilterLink>
    )
  }
}


export default FilterLinkContainer;