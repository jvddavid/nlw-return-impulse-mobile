/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
index.ts (c) 2022
Desc: description
Created:  2022-05-06T16:22:10.756Z
Modified: 2022-05-06T18:48:41.463Z
*/

import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { captureScreen } from 'react-native-view-shot';
import { api } from '../../libs/api';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';
import { FeedbackType } from '../Widget';
import * as FileSystem from 'expo-file-system'

import { styles } from './styles';

interface FormProps {
  feedbackType: FeedbackType
  onCanceled: () => void
  onSent: () => void

}


export function Form({ feedbackType, onCanceled, onSent }: FormProps) {
  const [screenshot, setScreenshot] = React.useState<string | null>(null);
  const [comment, setComment] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const feedbackInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then(setScreenshot).catch(console.error)
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSubmit() {
    setIsLoading(true)
    try {
      const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });
      await api.post('/feedbacks', {
        type: feedbackType,
        comment: comment,
        screenshot: screenshot ? `data:image/png;base64,${screenshotBase64}` : null
      })
      onSent()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackInfo.title}</Text>
        </View>
      </View>
      <TextInput
        multiline={true}
        style={styles.textInput}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setComment}
      />
      <View style={styles.footer}>
        <ScreenshotButton onRemoveShot={handleScreenshotRemove} onTakeShot={handleScreenshot} screenshot={screenshot} />
        <Button isLoading={isLoading} onPress={handleSubmit} />
      </View>
    </View>
  );
}
