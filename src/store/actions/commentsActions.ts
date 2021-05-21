import { PostType } from 'types/posts-types';

export type Action =
  | { type: 'SET_POST'; payload: { post: PostType } }
  | { type: 'CLEAR_POST' }
  | {
      type: 'LIKE_POST';
      payload: {
        postId: string;
        userId: string;
        actionType: 'LIKE' | 'DISLIKE';
      };
    };

export const setFetchedPost = (post: PostType): Action => ({
  type: 'SET_POST',
  payload: { post },
});

export const clearPost = (): Action => ({
  type: 'CLEAR_POST',
});

export const likePost = (
  postId: string,
  userId: string,
  actionType: 'LIKE' | 'DISLIKE'
): Action => ({
  type: 'LIKE_POST',
  payload: { postId, userId, actionType },
});
