/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
index.ts (c) 2022
Desc: description
Created:  2022-05-06T03:23:48.611Z
Modified: 2022-05-06T17:26:27.689Z
*/

import React from 'react';
import { View, Text } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';

import { styles } from './styles';

interface Props {
  onSelect: (feedbackType: FeedbackType) => void
}

export function Options({ onSelect }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu Feedback</Text>
      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <Option key={key} title={value.title} image={value.image} onPress={() => onSelect(key as FeedbackType)} />
          ))
        }
      </View>
      <Copyright />
    </View>
  );
}
