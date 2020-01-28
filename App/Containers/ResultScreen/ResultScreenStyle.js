import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingTop: 120,
    paddingBottom: 100,
    paddingHorizontal: 20,
    height: '100%',
  },
  scoreboardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 20,
  },
  scoreNumber: {
    fontSize: 40,
    width: 300,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    marginHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
  },
});
