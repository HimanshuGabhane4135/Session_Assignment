import React, {Component} from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import Screen from './screen';
import store from './store/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Screen />
        </View>
      </Provider>
    );
  }
}
