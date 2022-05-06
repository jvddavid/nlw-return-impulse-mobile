/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
styles.ts (c) 2022
Desc: description
Created:  2022-05-06T16:56:04.633Z
Modified: 2022-05-06T17:00:33.610Z
*/

import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  title: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand_color,
  }
});
