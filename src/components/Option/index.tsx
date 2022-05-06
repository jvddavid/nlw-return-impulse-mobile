/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
index.ts (c) 2022
Desc: description
Created:  2022-05-06T03:23:48.611Z
Modified: 2022-05-06T17:25:51.351Z
*/

import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Image, ImageProps, Text } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
