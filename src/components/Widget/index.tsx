/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
index.tsx (c) 2022
Desc: description
Created:  2022-05-06T02:30:45.571Z
Modified: 2022-05-06T18:33:38.611Z
*/

import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../theme';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Success } from '../Success';


export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackType, setFeedbackType] = React.useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = React.useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);


  const handleCanceled = () => { setFeedbackSent(false); setFeedbackType(null) }

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} weight="bold" />
      </TouchableOpacity>
      <BottomSheet ref={bottomSheetRef} snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {
          feedbackSent ? (
            <Success onRestart={handleCanceled} />
          ) : (
            <>
              {
                !feedbackType ? (
                  <Options onSelect={setFeedbackType} />
                ) : (
                  <Form feedbackType={feedbackType} onCanceled={handleCanceled} onSent={handleFeedbackSent} />
                )
              }
            </>
          )
        }
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
