import { PostType } from 'types/posts-types';

export type Action =
  | { type: 'SET_POST'; payload: { post: PostType } }
  | { type: 'ADD_POST'; payload: { post: PostType } };

export const setFetchedPost = (post: PostType): Action => ({
  type: 'SET_POST',
  payload: { post },
});

export const addPost = (post: PostType): Action => ({
  type: 'ADD_POST',
  payload: { post },
});
