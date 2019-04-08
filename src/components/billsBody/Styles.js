import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
    padding: 8,
    width: '80%'
  },
  billStyle: {
    paddingTop: 10,
    borderRadius: 4,
    paddingLeft: 15,
    paddingRight: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#e8eaf6',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 3
  },
  imageStyle: {
    marginRight: 10,
    width: 20,
    height: 20,
    marginLeft: 15,
    marginTop: 15
  },
  candidateNameStyle: {
    fontSize: 15,
    color: '#5B858A',
    alignSelf: 'center'
  },
  candidateStyle: {
    width: '100%',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 5 },
    elevation: 1,
    shadowRadius: 2
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
    color: '#5B858A',
    fontWeight: 'bold'
  },
  headersStyle: {
    justifyContent: 'center'
  }
});
