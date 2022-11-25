import React from 'react';
import {assignTestId} from '../../utils/qualityAssurance';
import {Header} from '../../Components/Header';
import * as Styled from './styles';

export interface IHomeProps {
  testID?: string;
}

export const Home: React.FC<IHomeProps> = ({testID = 'Home'}) => {
  return (
    <Styled.Container {...assignTestId('StatusBar', `${testID}_statusBar`)}>
      <Header
        {...assignTestId('View', `${testID}_header`)}
        title={'How are you feeling?'}
        isBack={false}
      />
    </Styled.Container>
  );
};
