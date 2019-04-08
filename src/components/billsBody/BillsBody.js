// Import libraries for making a component
import React from 'react';
import { View, Linking, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headersStyle}>
          <Text style={styles.headerStyle}> Upcoming Bills </Text>
          <Text style={styles.dateStyle}>April. 26 2019</Text>
        </View>
        <FlatList
          data={billInfo} renderItem={({ item }) =>
            <View style={styles.candidateStyle}>
              <TouchableOpacity onPress={() => Linking.openURL(item.website)}>
                <Text style={styles.candidateNameStyle}>{ item.name}</Text>
              </TouchableOpacity>
              <Text style={styles.candidateFactsStyle}>{item.description}</Text>
            </View>
          }
        />
      </View>
    );
  }
}

const billInfo = [
   {
     name: 'H.R. 559: NM Islands Long-Term Legal Residents Relief Act',
     description: 'To amend section 6 of the Joint Resolution entitled A Joint ' +
     'Resolution to approve the Covenant To Establish a Commonwealth of the' +
     ' Northern Mariana Islands in Political Union with the United States of ' +
     'America, and for other purposes".',
     website: 'https://www.govtrack.us/congress/bills/116/hr559'
   },
   {
     name: 'H.R. 1957: Taxpayer First Act of 2019',
     description: 'To amend the Internal Revenue Code of 1986 to modernize and ' +
     'improve the Internal Revenue Service, and for other purposes.',
     website: 'https://www.govtrack.us/congress/bills/116/hr1957'
   },
   {
     name: 'H.R. 1331: Local Water Protection Act',
     description: 'To amend the Federal Water Pollution Control Act to reauthorize' +
     ' certain programs relating to nonpoint source management, and for other purposes.',
     website: 'https://www.govtrack.us/congress/bills/116/hr1331'
   },
   {
     name: 'H.R. 639',
     description: 'To amend section 327 of the Robert T. Stafford Disaster Relief' +
     ' and Emergency Assistance Act to clarify that National Urban Search and ' +
     'Rescue Response System task forces may include Federal employees.',
     website: 'https://www.govtrack.us/congress/bills/116/hr639'
   },
   {
     name: 'H.R. 2030',
     description: 'To direct the Secretary of the Interior to execute and carry ' +
     'out agreements concerning Colorado River Drought Contingency Management and ' +
     'Operations, and for other purposes.',
     website: 'https://www.govtrack.us/congress/bills/116/hr2030'
   },
   {
     name: 'H.R. 1759: BRIDGE for Workers Act',
     description: 'To amend title III of the Social Security Act to extend' +
     ' reemployment services and eligibility assessments to all claimants for '
     + 'unemployment compensation, and for other purposes.',
     website: 'https://www.govtrack.us/congress/bills/116/hr1759'
   },
   {
     name: 'H.Con.Res. 19',
     description: 'Authorizing the use of the Capitol Grounds for the Greater' +
     ' Washington Soap Box Derby.',
     website: 'https://www.govtrack.us/congress/bills/116/hconres19'
   },
   {
     name: 'H.R. 1644: Save the Internet Act of 2019',
     description: 'To restore the open internet order of the Federal Communications Commission.',
     website: 'https://www.govtrack.us/congress/bills/116/hr1644'
   },
   {
     name: 'H.R. 2021: Investing for the People Act of 2019',
     description: 'To amend the Balanced Budget and Emergency Deficit Control Act' +
     ' of 1985 and to establish a congressional budget for fiscal year 2020.',
     website: 'https://www.govtrack.us/congress/bills/116/hr2021'
   },
   {
     name: 'H.Con.Res. 16',
     description: 'Authorizing the use of the Capitol Grounds for the National' +
     ' Peace Officers Memorial Service and the National Honor Guard and Pipe Band Exhibition.',
     website: 'https://www.govtrack.us/congress/bills/116/hconres16'
   }
];
