// Import libraries for making a component
import React from 'react';//, { Component } from 'react';
import { View, Text } from 'react-native';

import Footer from '../../components/footer/Footer.js';
import Header from '../../components/header/Header.js';
import styles from './Styles.js';

// Make a component
const Polls = ({ navigation }) => (
    <View style={styles.containerStyle}>
      <Header headerText={'Analytics'} />
      <Text style={styles.comingSoonStyle}> COMING SOON! :) </Text>
      <Footer nav={navigation} pageNumber={4} />
    </View>
);

export default Polls;
