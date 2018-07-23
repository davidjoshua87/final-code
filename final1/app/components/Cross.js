/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { red } from 'ansi-colors';

export default class Cross extends Component {
  render() {
    const { xTranslate, yTranslate, color } = this.props
    return (
      <View style={[styles.container, {
        transform: [
          {translateX: (xTranslate ? xTranslate : 10)},
          {translateY: (yTranslate ? yTranslate : 10)},
        ]
      }]}>
        <View style={[styles.line, {
          transform: [
            {rotate: '45deg'},
          ],
          backgroundColor: color ? color : 'red'
        }]} />
        <View style={[styles.line, {
          transform: [
            {rotate: '135deg'},
          ],
          backgroundColor: color ? color : 'red'
        }]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
  line: {
    position: 'absolute',
    width: 9,
    height: 105,
  },

})
