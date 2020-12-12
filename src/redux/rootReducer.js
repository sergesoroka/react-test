import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReduser';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
});
