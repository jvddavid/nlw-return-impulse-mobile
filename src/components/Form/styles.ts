/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
style.ts (c) 2022
Desc: description
Created:  2022-05-06T16:22:22.573Z
Modified: 2022-05-06T16:55:43.621Z
*/

import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 16
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingRight: 24
  },
  titleText: {
    fontSize: 20,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  textInput: {
    height: 112,
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 16
  }
});
