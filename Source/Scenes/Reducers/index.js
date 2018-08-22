import {combineReducers} from 'redux';
import todos from './reducerTodos';
import visibilityFilter from './reducerVisibility';

export default combineReducers ({
  todos,
  visibilityFilter,
})