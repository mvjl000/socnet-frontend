import { PostType } from 'types/posts-types';

export type Action =
  | { type: 'SET_FETCHED_POSTS'; payload: { posts: PostType[] } }
  | { type: 'DELETE_POST'; payload: string };

export const setFetchedPosts = (posts: PostType[]): Action => ({
  type: 'SET_FETCHED_POSTS',
  payload: { posts },
});

export const deletePost = (id: string): Action => ({
  type: 'DELETE_POST',
  payload: id,
});
