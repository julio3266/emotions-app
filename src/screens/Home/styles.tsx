import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.blueViolet};
`;

export const Content = styled.View`
  top: 4.5%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Column = styled.View`
  flex-direction: column;
`;
