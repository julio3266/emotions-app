import React from 'react';
import Theme from '@theme/styles';
import * as Styled from './styles';
import {assignTestId} from '@utils/qualityAssurance';

export interface ILoaderProps {
  testID?: string;
}

export const Loader: React.FC<ILoaderProps> = ({testID = 'Loader'}) => {
  return (
    <Styled.Container {...assignTestId('View', testID)}>
      <Styled.LoadItem
        {...assignTestId('ActivityIndicator', `${testID}_spinner`)}
        size={'large'}
        color={Theme.colors.blueViolet}
      />
    </Styled.Container>
  );
};
