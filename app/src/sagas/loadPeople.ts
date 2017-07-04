import { call, put, take } from 'redux-saga/effects';
import { fetchPeople } from './apiCalls';
import * as Constants from '../constants';

export function* loadPeople(): any {
  try {
    const people = yield call(fetchPeople);

    yield put({type: Constants.PeopleActions.FETCH_SUCCESS, payload: people.results});
  } catch (error) {
    yield put({type: Constants.PeopleActions.FETCH_FAILURE, error});
  }
}
