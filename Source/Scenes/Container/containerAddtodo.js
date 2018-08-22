import React, { Component } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
//import AddTodo from './Source/Scenes/Container/containerAddtodo'
import { addTodo } from './../Actions/actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',

    }
  }

  addTodo(text) {
    this.props.dispatch(addTodo(text));
    console.log('medha', text);
    this.setState({ text: '' });
  }

  render() {
    console.log(this.props.todos);

    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>AddTodo</Text>
        <View style={{ flexDirection: 'row', margin: 3 }}>

      <View style={{flex:.5}}>
          <TextInput style={{ alignItems: 'flex-start', justifyContent: 'flex-start', width: 283, height: 50, borderRadius: 17, borderWidth: 2, borderColor: 'black' }}
            placeholder="add new item"
            onChangeText={(text) => this.setState({text:text})}
            value={this.state.text} />
</View>

          <View style={{ flex: .2, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={() => this.addTodo({ text: this.state.text })} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'blue' }}>
              <Text style={{ color: 'white', alignSelf: 'center', fontSize: 30 }}>+</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
});

export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue'
  },
})
