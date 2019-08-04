import { SHOW_RESULTS, SHOW_ERROR } from './actionTypes';

export function showResults(data) {
  return {
    type: SHOW_RESULTS,
    data
  };
}
export function showError(data) {
  return {
    type: SHOW_ERROR,
    data
  };
}
