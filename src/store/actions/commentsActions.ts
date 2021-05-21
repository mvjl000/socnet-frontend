import { PostType } from 'types/posts-types';

export type Action =
  | { type: 'SET_POST'; payload: { post: PostType } }
  | { type: 'CLEAR_POST' };

export const setFetchedPost = (post: PostType): Action => ({
  type: 'SET_POST',
  payload: { post },
});

export const clearPost = (): Action => ({
  type: 'CLEAR_POST',
});
