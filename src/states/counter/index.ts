import {bindActionCreators} from '@reduxjs/toolkit';
import {useAppDispatch, useAppSelector} from '../store';
import counterSlice from './slice';

export default function useCounter() {
  const dispatch = useAppDispatch();

  const state = useAppSelector(store => store.counter);
  const actionCreator = bindActionCreators(counterSlice.actions, dispatch);

  return {...state, ...actionCreator};
}
