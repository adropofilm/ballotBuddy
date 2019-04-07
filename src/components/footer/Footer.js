// Import libraries for making a component
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';

// load icons
const involvementIcon = require('../../assets/icons/involvement.png');
const involvementActive = require('../../assets/icons/involvement_a.png');
const parchmentIcon = require('../../assets/icons/parchment.png');
const parchmentActive = require('../../assets/icons/parchment_a.png');
const pollIcon = require('../../assets/icons/poll.png');
const pollActive = require('../../assets/icons/poll_a.png');
const presidentIcon = require('../../assets/icons/president.png');
const presidentActive = require('../../assets/icons/president_a.png');

let parchment;
let involvement;
let poll;
let president;

// Make a component
const Footer = (props) => (
  renderIcons(props)
);

function renderIcons(props) {
  switch (props.pageNumber) {
    case 1:
      parchment = parchmentActive;
      president = presidentIcon;
      involvement = involvementIcon;
      poll = pollIcon;
      break;
    case 2:
      parchment = parchmentIcon;
      president = presidentActive;
      involvement = involvementIcon;
      poll = pollIcon;
      break;
    case 3:
      parchment = parchmentIcon;
      president = presidentIcon;
      involvement = involvementActive;
      poll = pollIcon;
      break;
    default:
      parchment = parchmentIcon;
      president = presidentIcon;
      involvement = involvementIcon;
      poll = pollActive;
      break;
  }

  return (
    <View style={styles.wrapperStyle}>
      <View style={styles.containerStyle}>
        <TouchableOpacity onPress={() => props.nav.navigate('BillsScreen')}>
          <Image source={parchment} style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.nav.navigate('CandidatesScreen')}>
          <Image source={president} style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.nav.navigate('HomeScreen')}>
          <Image source={involvement} style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.nav.navigate('PollsScreen')}>
          <Image source={poll} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Footer;
