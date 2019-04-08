// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

import Footer from '../../components/footer/Footer.js';
import Header from '../../components/header/Header.js';
import BillsBody from '../../components/billsBody/BillsBody.js';
import styles from './Styles';

// Make a component
const Bills = ({ navigation }) => (
  <View style={styles.containerStyle}>
    <Header headerText={'Track Legislation'} />
    <BillsBody />
    <Footer nav={navigation} pageNumber={1} />
  </View>
);

export default Bills;
