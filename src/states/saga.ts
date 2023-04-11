import {all, fork} from 'redux-saga/effects';
import counterWatcher from './counter/saga';
import {postWatcher} from './posts/saga';

export default function* rootSaga() {
  yield all([fork(counterWatcher), fork(postWatcher)]);
}
