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
    default:
      return state;
  }
}
