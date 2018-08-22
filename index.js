/** @format */

// Code for TodoApp with Redux

import { AppRegistry, View } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
AppRegistry.registerComponent(appName, () => App);

// INDEX FOR COUNTER PROJECT

// import { AppRegistry, View } from 'react-native';
// import React, { Component } from 'react';
// import { name as appName } from './app.json';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import Counter from './Source/NewSource/components/counter'
// import counter from './Source/NewSource/Reducer'

// const store = createStore(counter)

// export default class Root extends Component {
//   render() {
//     console.log(store.getState());
//     return (
//       <Provider store={store}>
//         <Counter
//           onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//           onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
//       </Provider>
//     )
//   }
// }

// AppRegistry.registerComponent(appName, () => Root);
