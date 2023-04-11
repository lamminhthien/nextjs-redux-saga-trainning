export interface IBaseInitialState {
  error?: string | string[];
  isFetching: boolean;
}

export interface IPostAttribute {
  id: number;
  title: string;
  author: string;
}
