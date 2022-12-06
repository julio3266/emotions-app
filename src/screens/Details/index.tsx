import React, {useState} from 'react';

import {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import * as Styled from './styles';

import {ProgressBar} from '../../components/ProgressBar';
import {CustomStatusBar} from '@Components/CustomStatusBar';
import {useRoute} from '@react-navigation/native';
import {Header} from '@Components/Header';
import Theme from '@theme/styles';
import {assignTestId} from '@utils/qualityAssurance';
import {goBack} from '@src/utils/RootNavigation';

export interface IDetails {
  testID?: string;
}

export const Details: React.FC<IDetails> = ({testID = 'Details'}) => {
  const {params}: any = useRoute();

  const translateX = useSharedValue(-177);
  const [position, setPosition] = useState<any>(-177);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
    },
    onActive: (event: any, context: any) => {
      runOnJS(setPosition)(translateX.value);
      translateX.value = event.translationX + context.translateX;
    },
    onEnd: (context: any) => {
      context.translateX = translateX.value;
    },
  });

  const dragButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const waveStyle = useAnimatedStyle(() => {
    return {
      bottom: 5,
      left: 170,
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <Styled.Container {...assignTestId('View', testID)}>
      <CustomStatusBar
        type="dark"
        {...assignTestId('View', `${testID}_statusBar`)}
      />
      <Header
        {...assignTestId('View', `${testID}_header`)}
        isTitle={true}
        handlePress={() => goBack()}
        isBack={true}
        title={'teste'}
        buttonColorType={'dark'}
      />

      <Styled.SectionPrimary>
        <Styled.BtnTitle>{params.emoji}</Styled.BtnTitle>
        <Styled.Title>I'm feeling</Styled.Title>
        <Styled.SecondaryTitle>
          Slightly {params.currentEmotion}
        </Styled.SecondaryTitle>
        <Styled.SubTitle>Choose the intensity of your feeling</Styled.SubTitle>
      </Styled.SectionPrimary>
      <Styled.SectionSecondary>
        <ProgressBar
          animatedStyled={[dragButtonStyle]}
          gestureEvent={panGestureEvent}
          waveProps={{
            width: 100,
            height: 40,
            animationProps: {
              gestureWaveAnimated: panGestureEvent,
              waveAnimationStyle: waveStyle,
            },
            color: Theme.colors.blueViolet,
          }}
          progressData={[
            {
              percents: [
                {
                  percenValue: 0,
                  selected: position <= -171 && position <= -115,
                },
                {
                  percenValue: 25,
                  selected: position >= -140 && position <= -90,
                },
                {
                  percenValue: 50,
                  selected: position >= -37 && position <= -8,
                },
                {percenValue: 75, selected: position >= 45 && position <= 65},
                {
                  percenValue: 100,
                  selected: position >= 103,
                },
              ],
              emotions: [
                {
                  emotionTitle: 'Slightly',
                  selected: position <= -200 && position <= -170,
                },
                {
                  emotionTitle: 'A litle',
                  selected: position <= 80 && position >= 60,
                },
                {
                  emotionTitle: 'Fairly',
                  selected: position >= 140 && position < 170,
                },
                {
                  emotionTitle: 'Very',
                  selected: position >= 208 && position < 265,
                },
                {
                  emotionTitle: 'Extremely',
                  selected: position >= 285 && position < 310,
                },
              ],
            },
          ]}
        />
        <Styled.BtnBottom>
          <Styled.BtnTitle>next</Styled.BtnTitle>
        </Styled.BtnBottom>
      </Styled.SectionSecondary>
    </Styled.Container>
  );
};
