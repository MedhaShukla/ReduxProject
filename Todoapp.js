import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './Source/Scenes/Container/containerAddtodo';
import VisibleTodolist from './Source/Scenes/Container/VisibleTodolist';

export default class TodoApp extends Component {

    state = {
        todos: [],
        visibilityFilter: 'Show All Todos',
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Todo App with Redux</Text>
                <AddTodo />
                <View>
                    <VisibleTodolist />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: 'blue'
    },

});
