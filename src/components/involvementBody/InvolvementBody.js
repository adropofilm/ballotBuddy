import React, { Component } from 'react';
import { View, TouchableOpacity, Linking, Image, Text } from 'react-native';
import styles from './Styles.js';

// load icons
const absent = require('../../assets/icons/absent.png');
const ballot = require('../../assets/icons/ballot.png');
const check = require('../../assets/icons/check.png');
const faq = require('../../assets/icons/faq.png');
const location = require('../../assets/icons/location.png');
const notification = require('../../assets/icons/notification.png');
const signup = require('../../assets/icons/signup.png');

console.disableYellowBox = true;

// Make a component
export default class InvolvementBody extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.headerStyle}>Let's Get Started!</Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.vote.org/polling-place-locator/')}>
            <Image source={location} style={styles.iconStyle} />
            <Text style={styles.textStyle}> Check polling Location </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL('https://drive.google.com/file/d/1YWxX5aINEbpi8OtG5WbIHaBTu7B2-mJ8/view')}>
            <Image source={ballot} style={styles.iconStyle} />
            <Text style={styles.textStyle}> Preview Example Ballot </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.vote.org/am-i-registered-to-vote/')}>
            <Image source={check} style={styles.iconStyle} />
            <Text style={styles.textStyle}> Check Your Registration </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.vote.org/absentee-ballot/')}>
            <Image source={absent} style={styles.iconStyle} />
            <Text style={styles.textStyle}> Get Absentee Ballot </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.rockthevote.org/voting-information/voting-faqs/')}>
            <Image source={faq} style={styles.iconStyle} />
            <Text style={styles.textStyle}> Voting FAQ </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.vote.org/register-to-vote/')}>
            <Image source={signup} style={styles.iconStyle} />
            <Text style={styles.textStyle}> Register to Vote </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.vote.org/election-reminders/')}>
            <Image source={notification} style={styles.iconStyle} />
            <Text style={styles.textStyle}> Get Election Reminders </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
