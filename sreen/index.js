import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style'


class Screen extends Component {

  render() {
    return (
      <View style={[styles.main]}>
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
                <Text style={{fontFamily: 'Rowdies_Bold'}}>
                    Welcome to First App!{'\n'}
                </Text>
                <Text style={{fontFamily: 'Rowdies_Regular'}}>
                    IT Path Solutions is your global tech innovation partner who have
                    pioneered the app development solutions services over the last 8
                    years having successfully worked on all industry verticals and
                    business sizes.
                </Text>
            </View>
        </View>
    );
  }
}

export default Screen;
