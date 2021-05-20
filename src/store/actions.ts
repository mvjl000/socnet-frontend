import { PostType } from 'types/posts-types';

export type Action =
  | { type: 'SET_FETCHED_POSTS'; payload: { posts: PostType[] } }
  | { type: 'ADD_POST'; payload: { post: PostType } }
  | { type: 'DELETE_POST'; payload: { postId: string } }
  | { type: 'EDIT_POST'; payload: { postId: string; content: string } };

export const setFetchedPosts = (posts: PostType[]): Action => ({
  type: 'SET_FETCHED_POSTS',
  payload: { posts },
});

export const addPost = (post: PostType): Action => ({
  type: 'ADD_POST',
  payload: { post },
});

export const deletePost = (postId: string): Action => ({
  type: 'DELETE_POST',
  payload: { postId },
});

export const editPost = (postId: string, content: string): Action => ({
  type: 'EDIT_POST',
  payload: { postId, content },
});
