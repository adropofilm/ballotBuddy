// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

// Make a component
const Header = (props) => (
  <View style={styles.headerStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
);

export default Header;
