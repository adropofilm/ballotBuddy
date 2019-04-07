// Import libraries for making a component
import React from 'react';//, { Component } from 'react';
import { View } from 'react-native';

import Footer from '../../components/footer/Footer.js';
import Header from '../../components/header/Header.js';
import styles from './Styles.js';

// Make a component
const Candidates = ({ navigation }) => (
    <View style={styles.containerStyle}>
      <Header headerText={'Candidates'} />
      <Footer nav={navigation} pageNumber={2} />
    </View>
);

export default Candidates;
