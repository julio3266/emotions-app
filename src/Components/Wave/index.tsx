import React from 'react';

import {Svg, Path} from 'react-native-svg';
import Animated from 'react-native-reanimated';
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {assignTestId} from '@utils/qualityAssurance';

export interface IWaveAnimation {
  gestureWaveAnimated: (
    event: GestureEvent<PanGestureHandlerEventPayload>,
  ) => void;
  waveAnimationStyle: any;
}

export interface IWave {
  testID?: string;
  width: number;
  height: number;
  color: string;
  animationProps: IWaveAnimation;
}

export const Wave: React.FC<IWave> = ({
  testID = 'wave',
  width,
  height,
  color,
  animationProps,
}) => {
  const staticWave =
    'M98 12.072C116.965 26.7798 139 34.072 150.5 33.072V44.572H0V31.572C9.5 26.072 11.4375 25.572 18 18.072C35.9376 -2.428 73.5 -6.92799 98 12.072Z';

  return (
    <PanGestureHandler
      {...assignTestId('View', testID)}
      onGestureEvent={animationProps.gestureWaveAnimated}>
      <Animated.View
        {...assignTestId('View', `${testID}_svgContainer`)}
        style={animationProps.waveAnimationStyle}>
        <Svg
          {...assignTestId('View', `${testID}_svg`)}
          width={width}
          height={height}
          viewBox="0 0 151 45"
          fill="none">
          <Path d={staticWave} fill={color} />
        </Svg>
      </Animated.View>
    </PanGestureHandler>
  );
};
