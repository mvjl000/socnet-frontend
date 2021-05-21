import { Action } from '../actions/commentsActions';
import { PostType } from 'types/posts-types';

export interface CommentsStateTypes {
  post: PostType[];
}

const initialState: CommentsStateTypes = {
  post: [],
};

export default function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'SET_POST':
      return {
        ...state,
        post: action.payload.post,
      };
    default:
      return state;
  }
}
