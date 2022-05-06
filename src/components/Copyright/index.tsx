/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
index.ts (c) 2022
Desc: description
Created:  2022-05-06T03:23:48.611Z
Modified: 2022-05-06T03:28:57.819Z
*/

import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feito com ♥ pela Rocketseat</Text>
    </View>
  );
}
