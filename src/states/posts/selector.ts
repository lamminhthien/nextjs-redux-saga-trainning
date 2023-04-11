import {RootState} from '../store';

export const getPost = (state: RootState, id: number) => state.posts.entities[id];
export const getPosts = (state: RootState) => state.posts.ids.map(id => getPost(state, Number(id)));
