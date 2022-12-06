import React from 'react';
import {assignTestId} from '@utils/qualityAssurance';
import * as Styled from './styles';

export interface IBtnEmotionProps {
  testID: string;
  title?: string;
  emoji?: any;
  handlePress?: () => void;
}

export const BtnEmotion: React.FC<IBtnEmotionProps> = ({
  testID,
  title,
  emoji,
  handlePress,
}) => {
  return (
    <Styled.Button
      onPress={handlePress}
      {...assignTestId('TouchableOpacity', testID)}>
      <Styled.Title {...assignTestId('View', `${testID}_title`)}>
        {title}
      </Styled.Title>
      <Styled.Emoji {...assignTestId('View', `${testID}_emoji`)}>
        {emoji}
      </Styled.Emoji>
    </Styled.Button>
  );
};
