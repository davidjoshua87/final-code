import {
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  instructions: {
    textAlign: 'center',
    marginTop: 28,
    color: 'grey',
    marginBottom: 5,
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 4,
    borderColor: '#000'
  },
  line: {
    position: 'absolute',
    width: 4,
    height: 306,
    backgroundColor: '#000',
    transform: [{
      translateX: 100
    }]
  }
})