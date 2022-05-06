/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
styles.ts (c) 2022
Desc: description
Created:  2022-05-06T16:45:03.202Z
Modified: 2022-05-06T17:04:32.661Z
*/

import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    position: 'relative'
  },
  removeIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  image: {
    width: 40,
    height: 40
  }
});
