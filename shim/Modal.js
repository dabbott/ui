import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

ReactNative.Modal = class Modal extends Component {
  render() {
    const {children, visible, transparent} = this.props;

    const style = {
      visibility: visible ? 'visible' : 'hidden',
      backgroundColor: transparent ? 'transparent' : 'white',
    };

    return (
      <View style={[styles.container, style]}>
        {children}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'fixed',
    zIndex: 1000,
  },
});
