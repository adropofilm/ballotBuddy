// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

import Footer from '../../components/footer/Footer.js';
import Header from '../../components/header/Header.js';
import styles from './Styles.js';

// Make a component
const Home = ({ navigation }) => (
    <View style={styles.containerStyle}>
      <Header headerText={'Get Involved'} />
      <Footer nav={navigation} pageNumber={3} />
    </View>
);

export default Home;
