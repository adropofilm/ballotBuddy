import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  headerStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00CA9D',
    alignSelf: 'center'
  },
  dateStyle: {
    paddingLeft: 10,
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'center',
    color: '#5B858A'
  },
  candidateStyle: {
    paddingBottom: 5,
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 5 },
    elevation: 1,
    shadowRadius: 2
  },
  candidateThumbnailStyle: {
    width: 80,
    height: 80,
    margin: 5
  },
  candidateNameStyle: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: 'bold',
    width: 80,
    color: '#5B858A'
  },
  candidatePartyStyle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginLeft: 5,
    alignSelf: 'center'
  },
  columnStyle: {
    flexDirection: 'column',
    marginLeft: 10
  },
  candidateRoleStyle: {
    width: 200,
    marginLeft: 2,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 13,
    color: '#5B858A'
  },
  candidateFactsStyle: {
    width: 200,
    marginLeft: 2,
    marginTop: 5,
    fontSize: 11
  },
  boldFont: {
    fontWeight: 'bold'
  },
  candidateFactTwoStyle: {
    width: 200,
    marginLeft: 2,
    marginTop: 5,
    fontSize: 11,
    marginBottom: 10
  },
  iconStyle: {
    //paddingRight: 10,
    width: 20,
    height: 20,
    //marginLeft: 15,
    //marginTop: 10
  },
  headersStyle: {
    justifyContent: 'center'
  },
  iconStyles: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    justifyContent: 'space-between'
  }
});
