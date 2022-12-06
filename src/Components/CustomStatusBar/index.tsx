import React from 'react';
import {StatusBar} from 'react-native';
import {assignTestId} from '@utils/qualityAssurance';

type TypeOfBar = 'light' | 'dark';

export interface ICustomStatusBar {
  testID?: string;
  type: TypeOfBar;
}

export const CustomStatusBar: React.FC<ICustomStatusBar> = ({
  testID = 'CustomStatusBar',
  type,
}) => {
  return (
    <>
      <StatusBar
        {...assignTestId('TouchableOpacity', `${testID}_backButton`)}
        barStyle={type === 'light' ? 'light-content' : 'default'}
      />
    </>
  );
};
