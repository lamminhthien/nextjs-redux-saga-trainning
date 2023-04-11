import {create} from 'zustand';
import * as API from '@/api/network/posts';
import {IPostAttribute} from '@/types';
import {devtools, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

type State = {
  posts: IPostAttribute[];
  ids: number[];
  entities: {
    [key: number]: IPostAttribute;
  };
};

type Actions = {
  getPosts: () => void;
};

const usePostsStore = create<State & Actions>()(
  devtools(
    immer(set => ({
      posts: [],
      ids: [],
      entities: {},
      getPosts: async () => {
        const response = await API.list();
        const entities: {
          [key: number]: IPostAttribute;
        } = {};
        const ids = response.data.map(e => {
          entities[e.id] = e;
          return e.id;
        });
        set(() => ({
          posts: response.data as IPostAttribute[],
          ids,
          entities
        }));
      }
    }))
  )
);

export default usePostsStore;
