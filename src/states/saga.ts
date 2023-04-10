import {all, fork} from 'redux-saga/effects';
import counterWatcher from './counter/saga';

export default function* rootSaga() {
  yield all([fork(counterWatcher)]);
}
