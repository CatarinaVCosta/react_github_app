import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import searchReducer from './containers/searchComponent/reducer';
import searchResultsReducer from './containers/searchResultsComponent/reducer';
import { Provider } from 'react-redux';
import { searchWatcher } from './containers/searchComponent/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
  search: searchReducer,
  results: searchResultsReducer
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(searchWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
