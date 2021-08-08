import courses from './courses.reducer';
import { combineReducers } from 'redux';

export const coursesHandler = combineReducers({
  courses
});
