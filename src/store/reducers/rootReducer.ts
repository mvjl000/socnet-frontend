import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  todos: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
