import React from 'react';
import {assignTestId} from '../../../src/utils/qualityAssurance';
import {CustomStatusBar} from '../CustomStatusBar';
// import {CustomStatusBar} from '../CustomStatusBar';
import * as Styled from './styles';

export interface IHeaderProps {
  testID?: string;
  title: string;
  isBack: boolean;
  handlePress?: () => void;
}

export const Header: React.FC<IHeaderProps> = ({
  testID = 'Header',
  title,
  isBack,
  handlePress,
}) => {
  return (
    <Styled.Container {...assignTestId('View', testID)}>
      <CustomStatusBar
        {...assignTestId('StatusBar', `${testID}_statusBar`)}
        type="light"
      />
      {isBack && (
        <Styled.BackButton
          {...assignTestId('TouchableOpacity', `${testID}_backButton`)}
          onPress={handlePress}>
          <Styled.LeftIcon />
        </Styled.BackButton>
      )}

      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};
