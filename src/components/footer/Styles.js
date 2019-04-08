import { StyleSheet } from 'react-native';

const ICON_WIDTH = 35;
const ICON_HEIGHT = 35;

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    height: 100,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    elevation: 1,
    flexDirection: 'row',
    paddingLeft: 45,
    paddingRight: 45
  },
  textStyle: {
    fontSize: 25,
    color: '#00CA9D'
  },
  iconStyle: {
    width: ICON_WIDTH,
    height: ICON_HEIGHT,
    alignSelf: 'center'
  },
  wrapperStyle: {
    width: '100%'
  }
});
