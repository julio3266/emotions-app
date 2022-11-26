import React from 'react';
import {
  GestureEvent,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import Animated from 'react-native-reanimated';
import * as Styled from './styles';
import {IWave, Wave} from '@Components/Wave';
import {assignTestId} from '@utils/qualityAssurance';

interface IEmotions {
  emotionTitle: string;
  selected: boolean;
}
interface IPercents {
  percenValue: number;
  selected: boolean;
}

interface IProgressData {
  percents?: IPercents[];
  emotions?: IEmotions[];
}

export interface IProgressBar {
  testID?: string;
  progressData?: IProgressData[];
  gestureEvent?: (event: GestureEvent<PanGestureHandlerEventPayload>) => void;
  waveProps: IWave;
  animatedStyled?: any;
}

export const ProgressBar: React.FC<IProgressBar> = ({
  testID = 'ProgressBar',
  progressData,
  gestureEvent,
  animatedStyled,
  waveProps,
}) => {
  return (
    <GestureHandlerRootView {...assignTestId('View', testID)}>
      <Styled.PercentsContainer {...assignTestId('View', `${testID}_content`)}>
        {progressData?.[0]?.percents?.map(
          (percents: any, percentIndex: any) => {
            return (
              <Styled.PercentTitle
                {...assignTestId(
                  'Text',
                  `${testID}_percentTitle_${percentIndex}`,
                )}
                selected={percents.selected}>
                {percents.percenValue}
              </Styled.PercentTitle>
            );
          },
        )}
      </Styled.PercentsContainer>
      <Styled.Progress {...assignTestId('View', `${testID}_progressContainer`)}>
        <Styled.WaveContainer
          {...assignTestId('View', `${testID}_waveContainer`)}>
          <Wave {...assignTestId('View', `${testID}_wave`)} {...waveProps} />
        </Styled.WaveContainer>
        <Styled.Row {...assignTestId('View', `${testID}_row`)}>
          <PanGestureHandler
            {...assignTestId('View', `${testID}_panGestureHandler`)}
            onGestureEvent={gestureEvent}>
            <Animated.View
              {...assignTestId('View', `${testID}_animatedView`)}
              style={[animatedStyled]}>
              <Styled.DragDropBtn
                {...assignTestId(
                  'TouchableOpacity',
                  `${testID}_dragDropButton`,
                )}>
                <Styled.IconBars
                  {...assignTestId('Text', `${testID}_iconBars`)}
                />
              </Styled.DragDropBtn>
            </Animated.View>
          </PanGestureHandler>
        </Styled.Row>
        <Styled.EmotionsContainer
          {...assignTestId('View', `${testID}_emotionsContainer`)}>
          {progressData?.[0]?.emotions?.map(
            (percents: IEmotions, percentIndex: number) => {
              return (
                <Styled.EmotionsData
                  {...assignTestId(
                    'View',
                    `${testID}_emotionsData_${percentIndex}`,
                  )}
                  selected={percents.selected}>
                  {percents.emotionTitle}
                </Styled.EmotionsData>
              );
            },
          )}
        </Styled.EmotionsContainer>
      </Styled.Progress>
    </GestureHandlerRootView>
  );
};
