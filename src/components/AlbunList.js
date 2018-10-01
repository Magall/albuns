import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbunDetail from './AlbunDetail';
export default class AlbunList extends Component {
  state = { albuns: [] };

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albuns: response.data }));
  }

  renderAlbuns() {
    return this.state.albuns.map(albun => <AlbunDetail key={albun.title} albun={albun} />);
  }

  render() {
    return <View>{this.renderAlbuns()}</View>;
  }
}
