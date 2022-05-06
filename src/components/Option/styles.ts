/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
styles.ts (c) 2022
Desc: description
Created:  2022-05-06T03:23:58.757Z
Modified: 2022-05-06T04:39:35.646Z
*/

import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 112,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: theme.colors.surface_secondary
  },
  image: {
    width: 40,
    height: 40
  },
  title: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  }
});
