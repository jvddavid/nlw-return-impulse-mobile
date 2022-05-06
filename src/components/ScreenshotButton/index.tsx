/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
index.tsx (c) 2022
Desc: description
Created:  2022-05-06T16:44:57.327Z
Modified: 2022-05-06T17:03:18.073Z
*/

import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
  onTakeShot: () => void;
  onRemoveShot: () => void;
  screenshot: string | null;
}

export function ScreenshotButton({ screenshot, onRemoveShot, onTakeShot }: Props) {
  return (
    <TouchableOpacity style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot ? (
          <View >
            <Image source={{ uri: screenshot }} style={styles.image} />
            <Trash weight='fill' size={22} color={theme.colors.text_secondary} style={styles.removeIcon} />
          </View>
        ) : (
          <Camera weight='bold' size={24} color={theme.colors.text_secondary} />
        )
      }
    </TouchableOpacity>
  );
}
