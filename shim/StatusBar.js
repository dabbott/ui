import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import EventEmitter from 'events';

const ReactNative = require('react-native');

const emitter = new EventEmitter();
emitter.setMaxListeners(1000);

const getTime = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours / 12 < 1 ? 'AM' : 'PM';

  return `${hours % 12}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
};

ReactNative.StatusBar = class StatusBar extends Component {

  static setTranslucent() {}

  static setBackgroundColor() {}

  static setBarStyle(barStyle) {
    emitter.emit('style', barStyle);
  }

  static setNetworkActivityIndicatorVisible() {}

  state = {
    barStyle: 'default',
  }

  updateStyle = barStyle => this.setState({ barStyle })

  componentDidMount() {
    emitter.addListener('style', this.updateStyle);
  }

  componentWillUnmount() {
    emitter.removeListener('style', this.updateStyle);
  }

  render() {
    const { barStyle } = this.state;
    const color = 'light-content' ? 'white' : 'black';

    return (
      <View style={styles.container}>
        <Text style={[styles.text, { color }]}>{getTime()}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
});
