import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 100,
    paddingHorizontal: 20,
    height: '100%',
  },
  ques_number: {
    fontSize: 18,
  },
  ques_text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  no_selectedStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0.5,
    marginVertical: 5,
  },
  no_selectedTxt: {
    fontSize: 20,
  },
  selectedStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0.5,
    backgroundColor: '#000',
    marginVertical: 5,
  },
  selectedTxt: {
    fontSize: 20,
    color: '#fff',
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
