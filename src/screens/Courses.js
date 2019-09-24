import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {View, Text} from 'react-native';
import themeStyles from '../utils/theme.styles';

export default class Courses extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: themeStyles.COLOR.screenBG}}>
          <Text>Courses</Text>
        </View>
      </SafeAreaView>
    );
  }
}
