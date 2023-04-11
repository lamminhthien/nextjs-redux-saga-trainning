import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counter/slice';
import createSagaMiddleware from 'redux-saga';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import rootSaga from './saga';
import postSlice from './posts/slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    posts: postSlice.reducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export {store};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
