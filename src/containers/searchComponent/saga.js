import { take, put } from 'redux-saga/effects';
import {
  DO_SEARCH, gitHubAPIRequest,
} from './actionTypes';
import { showError, showResults } from '../searchResultsComponent/action';
import { doSearchError, doSearchSuccess } from './action';

const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

export function* searchWatcher() {
  const request = gitHubAPIRequest();
  while (true) {
    const data = yield take(DO_SEARCH);
    const {name} = data;

    const response = yield fetch(request.path + name, request)
      .then(
        async function (response) {
          let data = await response.json();
          if (response.ok) {
            return data;
          } else {
            throw  new Error(data.message);
          }

        }
      )
      .then(data => {
          return {
            type: SUCCESS,
            data: data
          }
        },
        error => {
          return {
            type: ERROR,
            data: error
          }
        }
      );

    if (response.type === SUCCESS) {
      yield put(showResults(response.data));
      yield put(doSearchSuccess());
    } else {
      yield put(showError(response.data.message));
      yield put(doSearchError());
    }
  }
}
