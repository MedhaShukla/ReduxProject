import { connect } from 'react-redux';
import Todolist from '../Components/component.Todolists';
import { toggleTodo } from './../Actions/actions';
import { VisibilityFilters } from './../Actions/actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return unknown
  }
}
const mapStatetoProps = state => ({
  todos: state.todos
})

const mapDispatchtoProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(Todolist)
