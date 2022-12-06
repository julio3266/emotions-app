import React from 'react';
import {assignTestId} from '@utils/qualityAssurance';
import {CustomStatusBar} from '../CustomStatusBar';
import * as Styled from './styles';

export type backButtonType = 'light' | 'dark';

export interface IHeaderProps {
  testID?: string;
  title: string;
  isBack?: boolean;
  isTitle?: boolean;
  buttonColorType?: backButtonType;
  handlePress?: () => void;
}

export const Header: React.FC<IHeaderProps> = ({
  testID = 'Header',
  title,
  isBack,
  handlePress,
  buttonColorType = 'dark',
  isTitle,
}) => {
  return (
    <Styled.Container {...assignTestId('View', testID)}>
      <CustomStatusBar
        {...assignTestId('StatusBar', `${testID}_statusBar`)}
        type="dark"
      />
      {isBack && (
        <Styled.BackButton
          {...assignTestId('TouchableOpacity', `${testID}_backButton`)}
          position={buttonColorType}
          onPress={handlePress}>
          <Styled.LeftIcon typeIcon={buttonColorType} />
        </Styled.BackButton>
      )}
      {isTitle && <Styled.Title>{title}</Styled.Title>}
    </Styled.Container>
  );
};
