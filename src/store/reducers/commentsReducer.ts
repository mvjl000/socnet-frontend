import { Action } from '../actions/commentsActions';
import { PostType } from 'types/posts-types';

export interface CommentsStateTypes {
  post: PostType | null;
}

const initialState: CommentsStateTypes = {
  post: null,
};

export default function commentsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'SET_POST':
      return {
        ...state,
        post: action.payload.post,
      };
    case 'CLEAR_POST':
      return {
        ...state,
        post: null,
      };
    case 'LIKE_POST':
      if (!state.post) return state;
      if (action.payload.actionType === 'LIKE') {
        return {
          ...state,
          post: {
            ...state.post,
            likesCount: state.post.likesCount + 1,
            likedBy: [...state.post.likedBy, action.payload.userId],
          },
        };
      } else {
        const newLikeUsersList = state.post.likedBy.filter(
          (uid) => uid !== action.payload.userId
        );
        return {
          ...state,
          post: {
            ...state.post,
            likesCount: state.post.likesCount - 1,
            likedBy: [...newLikeUsersList],
          },
        };
      }
    default:
      return state;
  }
}
