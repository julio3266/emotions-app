import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.darkTransparency};
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-left: 2%;
  margin-top: 2%;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.robotoRegular};
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

export const Emoji = styled.Text`
  font-family: ${({theme}) => theme.fonts.robotoRegular};
  text-align: center;
`;
