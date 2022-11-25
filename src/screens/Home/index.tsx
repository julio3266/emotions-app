import React from 'react';
import {Header} from '../../Components/Header';
import * as Styled from './styles';

export const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Header title={'How are you feeling?'} isBack={false} />
    </Styled.Container>
  );
};
