import {IBaseInitialState, IPostAttribute} from '@/types';
import {PayloadAction, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

const postsAdapter = createEntityAdapter<IPostAttribute>({
  selectId: post => post.id
});

const initialState = postsAdapter.getInitialState<IBaseInitialState>({
  isFetching: false
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    listRequest(state) {
      state.isFetching = true;
    },
    listSuccess(state, action: PayloadAction<IPostAttribute[]>) {
      state.isFetching = false;
      postsAdapter.setAll(state, action.payload);
      console.log('post success', action.payload);
    },
    listFailure(state, action: PayloadAction<AxiosError>) {
      state.isFetching = false;
      state.error = action.payload.message;
      console.log('post failure', action);
    }
  }
});

export default postSlice;
