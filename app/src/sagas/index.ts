import { takeLatest } from 'redux-saga';
import { loadPeople } from './loadPeople';
import * as Constants from '../constants';

function* rootSaga(): any {
  /*The saga is waiting for a action called LOAD_DASHBOARD to be activated */
  yield [
    yield takeLatest(Constants.PeopleActions.FETCH, loadPeople),
  ];
}

export default rootSaga;
