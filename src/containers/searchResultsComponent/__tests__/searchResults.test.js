import React from 'react';
import { SearchResults } from "../searchResults";
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import ReactTestRenderer from 'react-test-renderer';
import Typography from '@material-ui/core/Typography';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SnackbarContent from '@material-ui/core/SnackbarContent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test search results', () => {
  const user = {
    avatar_url: 'dummy_avatar',
    name: 'dummy_name',
    location: 'dummy_location',
    email: 'dummy_email',
    html_url: 'dummy_url',
  };

  let store, errorStore;
  const mockStore = configureStore();

  let initialState = {
    results: {
      user: user,
      errorMessage: null
    }
  };

  let initialStateError = {
    results: {
      user: null,
      errorMessage: 'error'
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    errorStore = mockStore(initialStateError)
  });


  it('Should match snapshot', () => {
    const wrapper = ReactTestRenderer.create(<Provider store={store}> <SearchResults /> </Provider>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Img element src value should match with defined props', () => {
    const wrapper = shallow(<Provider store={store}> <SearchResults /> </Provider>);
    expect(wrapper.html()).toContain('src="dummy_avatar"')
  });

  it('href value should match with defined props', () => {
    const wrapper = shallow(<Provider store={store}> <SearchResults /> </Provider>);
    expect(wrapper.html()).toContain('href="dummy_url"')
  });

  it('Typography components values should match with defined props', () => {
    const wrapper = ReactTestRenderer.create(<Provider store={store}> <SearchResults /> </Provider>);
    const typographyLocation = wrapper.root.findAllByType(Typography)[0].props;
    const typographyEmail = wrapper.root.findAllByType(Typography)[1].props;
    const typographyUrl = wrapper.root.findAllByType(Typography)[2].props;

    expect(typographyLocation.children).toEqual(initialState.results.user.location);
    expect(typographyEmail.children).toEqual(initialState.results.user.email);
    expect(typographyUrl.children).toEqual(initialState.results.user.html_url);
  });

  it('Should not render Card component when props are undefined', () => {
    const wrapper = ReactTestRenderer.create(<Provider store={errorStore}> <SearchResults /> </Provider>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Should render SnackbarContent component when user not found', () => {
    const wrapper = ReactTestRenderer.create(<Provider store={errorStore}> <SearchResults /> </Provider>);
    const snackbar = wrapper.root.findAllByType(SnackbarContent)[0].props;

    expect(snackbar.message).toEqual(initialStateError.results.errorMessage);
  });
});
