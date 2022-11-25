import React from 'react';
import {StatusBar} from 'react-native';

type TypeOfBar = 'light' | 'default';

export interface ICustomStatusBar {
  type: TypeOfBar;
}

export const CustomStatusBar: React.FC<ICustomStatusBar> = ({type}) => {
  return (
    <>
      <StatusBar
        barStyle={type === 'light' ? 'light-content' : 'dark-content'}
      />
    </>
  );
};
