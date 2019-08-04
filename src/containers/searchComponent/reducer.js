import { DO_SEARCH, DO_SEARCH_ERROR, DO_SEARCH_SUCCESS } from './actionTypes';

export const initialState = {
  request: {
    status: null
  }
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case DO_SEARCH:
      return {
        ...state,
        request: { ...state.request, status: 'in_progress' }
      };
    case DO_SEARCH_ERROR:
      return {
        ...state,
        request: { ...state.request, status: 'error' }
      };
    case DO_SEARCH_SUCCESS:
      return {
        ...state,
        request: { ...state.request, status: 'success' }
      };
    default:
      return state;
  }
}
export default searchReducer;
