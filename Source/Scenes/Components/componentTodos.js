import React from 'react'
import PropTypes from 'prop-types'
​
const Todo = ({ onClick, completed, text }) => (
  <View
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </View>
)
​
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
​
export default Todo