
import { ADD_TODO, TOGGLE_TODO } from './actionsType';


let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    Id: nextTodoId++,
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id

  };
};

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITYFILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'

};
