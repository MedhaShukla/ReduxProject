import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
​
const App = () => (
  <View>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </View>
)
​
export default App