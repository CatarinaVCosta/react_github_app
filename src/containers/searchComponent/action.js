import { DO_SEARCH, DO_SEARCH_ERROR, DO_SEARCH_SUCCESS } from './actionTypes';

export function doSearch(name) {
  return {
    type: DO_SEARCH,
    name
  };
}

export function doSearchSuccess() {
  return { type: DO_SEARCH_SUCCESS }
}

export function doSearchError() {
  return { type: DO_SEARCH_ERROR }
}
