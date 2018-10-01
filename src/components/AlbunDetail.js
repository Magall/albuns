import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbunDetail = props => {
  return (
    <Card>
      <Text>{props.albun.title}</Text>
    </Card>
  );
};
export default AlbunDetail;
