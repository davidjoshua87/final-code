/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import {
  GAME_RESULT_NO,
  GAME_RESULT_USER,
  GAME_RESULT_AI,
  GAME_RESULT_DRAW
} from '../constants/game'

export default class Result extends Component {

  generateResultText(result: number) {
    switch (result) {
      case GAME_RESULT_USER:
        return 'You Won 😎'
      case GAME_RESULT_AI:
        return 'You Lose 😔'
      case GAME_RESULT_DRAW:
        return 'Game Draw 😤'
      default:
        return ''
    }
  }

  render() {
    const { result, onRestart } = this.props
    return (
      <View>
        <Text style={ styles.text }>{ this.generateResultText(result) }</Text>
        {
          result !== GAME_RESULT_NO && (
            <TouchableOpacity onPress={ () => onRestart() }>
              <Text style={ styles.instructions }>
                Touch here to play again
              </Text>
            </TouchableOpacity>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 28,
    marginBottom: 10,
    fontSize: 21,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center'
  },
  instructions: {
    marginTop: 30,
    color: 'grey',
    marginBottom: 5,
    textAlign: 'center'
  },
})
