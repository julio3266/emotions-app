import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import Theme from '../theme/styles';

interface IProps {
  children: any;
  padding?: boolean;
}

export const ThemeProviderWrapper: React.FC<IProps> = ({children}) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};
