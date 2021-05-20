import { Action } from '../actions';
import { PostType } from 'types/posts-types';

export interface PostsStateTypes {
  posts: PostType[];
}

const initialState: PostsStateTypes = {
  posts: [],
};

export default function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'SET_FETCHED_POSTS':
      return {
        ...state,
        posts: action.payload.posts,
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
      };
    case 'DELETE_POST':
      const newPosts = state.posts.filter(
        (post) => post._id !== action.payload.postId
      );
      return {
        ...state,
        posts: newPosts,
      };
    default:
      return state;
  }
}
