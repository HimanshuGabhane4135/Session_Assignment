import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { firstIncrement, secondDecrement } from '../store/Action';
import styles from './style';


class Screen extends Component {

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Icon style={styles.logo} name="backward" size={50} color="black" />
          <Icon style={styles.logo} name="italic" size={50} color="black" />
          <Icon style={styles.logo} name="pinterest" size={50} color="black" />
          <Icon
            style={styles.logo}
            name="strikethrough"
            size={50}
            color="black"
          />
          <Icon style={styles.logo} name="forward" size={50} color="black" />
        </View>
        <View style={styles.text}>
          <Text style={styles.head}>Welcome to First App!{'\n'}</Text>
          <Text style={styles.subhead}>
            IT Path Solutions is your global tech innovation partner who have
            pioneered the app development solutions services over the last 8
            years having successfully worked on all industry verticals and
            business sizes.
          </Text>
          <View>
            <Text>{this.props.counter}</Text>
            <Button onPress={this.props.increment} title="Increment" />
            <Button
              onPress={this.props.decrement}
              title="Decrement"
            />
          </View>
        </View>
      </View>
    ); 
  }
}

// 2022-02-16 09:43:01.449250+0530 Himanshu Application[8106:57179] font name  Rowdies-Regular
// 2022-02-16 09:43:01.449386+0530 Himanshu Application[8106:57179] font name  Rowdies-Light
// 2022-02-16 09:43:01.449499+0530 Himanshu Application[8106:57179] font name  Rowdies-Bold

const mapStateToProps = (state) => {
  return {
    counter: state.incDec.counter,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(firstIncrement()),
    decrement: () => dispatch(secondDecrement()),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Screen);
