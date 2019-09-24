import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import themeStyles from '../utils/theme.styles';

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: themeStyles.COLOR.screenBG}}>
          <Text>Profile</Text>
        </View>
      </SafeAreaView>
    );
  }
}
