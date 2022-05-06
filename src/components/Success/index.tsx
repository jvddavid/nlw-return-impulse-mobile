/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
index.tsx (c) 2022
Desc: description
Created:  2022-05-06T17:05:14.633Z
Modified: 2022-05-06T18:29:17.536Z
*/

import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface Props {
  onRestart: () => void;
}

export function Success({ onRestart }: Props) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>
        Agradecemos o seu feedback!
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRestart} >
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
