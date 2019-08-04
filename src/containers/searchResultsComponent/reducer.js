import { SHOW_ERROR, SHOW_RESULTS } from './actionTypes';

export const initialState = {
  user: null,
  errorMessage: null
};

function searchResultsReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_RESULTS:
      return {
        ...state,
        user: action.data,
        errorMessage: null
      };
    case SHOW_ERROR:
      return {
        ...state,
        user: null,
        errorMessage: action.data
      };
    default:
      return state;
  }
}
export default searchResultsReducer;
