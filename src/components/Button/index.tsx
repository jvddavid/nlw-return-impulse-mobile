/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
index.tsx (c) 2022
Desc: description
Created:  2022-05-06T16:56:00.004Z
Modified: 2022-05-06T18:21:33.222Z
*/

import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
}

export function Button({ isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity disabled={isLoading} style={styles.container} {...rest}>
      {
        isLoading ? (
          <ActivityIndicator size="small" color={theme.colors.text_on_brand_color} />
        ) : (
          <Text style={styles.title}>Enviar Feedback</Text>
        )
      }
    </TouchableOpacity>
  );
}
