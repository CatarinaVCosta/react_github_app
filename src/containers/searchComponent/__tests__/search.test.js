import React from 'react';
import { SearchInput } from '../search';
import ReactTestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Test search results', () => {
  let store;
  const mockStore = configureStore();

  let initialState = {
    name: 'name'
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('Should match snapshot', () => {
    const wrapper = ReactTestRenderer.create(<Provider store={store}> <SearchInput /> </Provider>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
