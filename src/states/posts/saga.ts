import {all, call, put, takeLatest} from 'redux-saga/effects';
import postSlice from './slice';
import * as API from '@/api/network/posts';
import {AxiosError, AxiosResponse} from 'axios';
import {IPostAttribute} from '@/types';

function* list() {
  try {
    const response: AxiosResponse<IPostAttribute[]> = yield call(API.list);
    console.log('🚀 ~ file: saga.ts:8 ~ function*list ~ response:', response.data);
    yield put(postSlice.actions.listSuccess(response.data));
  } catch (error: any) {
    yield put(postSlice.actions.listFailure(error));
  }
}

export function* postWatcher() {
  yield all([takeLatest(postSlice.actions.listRequest.type, list)]);
}
