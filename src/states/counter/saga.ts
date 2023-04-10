import {put, takeEvery, all, takeLatest} from 'redux-saga/effects';
import counterSlice from './slice';

export function* incrementByAmount() {
  const random_boolean = Math.random() < 0.5;
  console.log('🚀 ~ file: saga.ts:6 ~ function*incrementByAmount ~ random_boolean:', random_boolean);
  if (random_boolean) {
    yield put(counterSlice.actions.incrementByAmountSuccess(10));
  } else {
    yield put(counterSlice.actions.incrementByAmountFailure());
  }
  yield put(counterSlice.actions.incrementByAmountSuccess(10));
}

export default function* counterWatcher() {
  yield all([takeLatest(counterSlice.actions.incrementByAmountRequest.type, incrementByAmount)]);
}
