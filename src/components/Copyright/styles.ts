/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
styles.ts (c) 2022
Desc: description
Created:  2022-05-06T03:23:58.757Z
Modified: 2022-05-06T03:29:42.061Z
*/

import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 12,
    color: theme.colors.text_secondary,
    fontFamily: theme.fonts.medium,
  }
});
