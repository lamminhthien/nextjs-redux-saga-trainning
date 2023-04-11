import {bindActionCreators} from '@reduxjs/toolkit';
import {useAppDispatch, useAppSelector} from '../store';
import postSlice from './slice';

export default function usePost() {
  const dispatch = useAppDispatch();

  const state = useAppSelector(store => store.posts);
  const actionCreator = bindActionCreators(postSlice.actions, dispatch);

  return {...state, ...actionCreator};
}
