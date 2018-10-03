import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';

import AlbunList from './src/components/AlbunList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Albuns" />
        <AlbunList />
      </View>
    );
  }
}
