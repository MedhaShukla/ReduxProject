import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Todolist=( {todos, toggleTodo })=> {
  return (
    <View style={{ padding: 10 }}>
      {todos.map(todo =>
        <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
          <Text style={{
            fontSize: 20,
            textDecorationLine: todo.completed ? 'line-through' : 'none'
          }}>{todos.text}</Text>
        </TouchableOpacity>)}
    </View>
  )
}

export default Todolist;
