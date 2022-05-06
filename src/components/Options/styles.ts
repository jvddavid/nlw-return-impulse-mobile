/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
styles.ts (c) 2022
Desc: description
Created:  2022-05-06T03:23:58.757Z
Modified: 2022-05-06T04:45:02.840Z
*/

import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  options: {
    width: '100%',
    marginBottom: 48,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 32,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  }
});
