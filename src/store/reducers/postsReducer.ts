import { Action } from '../actions/postsActions';
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
    case 'EDIT_POST':
      const editedPosts = state.posts.map((post) => {
        if (post._id === action.payload.postId) {
          return {
            ...post,
            content: action.payload.content,
            edited: true,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: editedPosts,
      };
    case 'LIKE_POST': {
      if (action.payload.actionType === 'LIKE') {
        const newPosts = state.posts.map((post) => {
          if (post._id === action.payload.postId) {
            return {
              ...post,
              likesCount: post.likesCount + 1,
              likedBy: [...post.likedBy, action.payload.userId],
            };
          }
          return post;
        });
        return {
          ...state,
          posts: newPosts,
        };
      } else {
        const newPosts = state.posts.map((post) => {
          const newLikeUsersList = post.likedBy.filter(
            (uid) => uid !== action.payload.userId
          );
          if (post._id === action.payload.postId) {
            return {
              ...post,
              likesCount: post.likesCount - 1,
              likedBy: [...newLikeUsersList],
            };
          }
          return post;
        });
        return {
          ...state,
          posts: newPosts,
        };
      }
    }
    default:
      return state;
  }
}
