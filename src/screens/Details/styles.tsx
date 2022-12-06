import Theme from '@theme/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const SectionPrimary = styled.View`
  top: 10%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const SectionSecondary = styled.View`
  margin-top: auto;
  height: 40%;
  border-top-radius: (20, 20, 20, 20);
  background-color: ${({theme}) => theme.colors.blueViolet};
`;

export const Progress = styled.View``;

export const Percents = styled.View`
  flex-direction: row;
  justify-content: space-around;
  bottom: 35px;
`;

export const PercentTitle = styled.Text`
  font-size: ${(props: {selectec: boolean}) =>
    props.selectec ? '25px' : '18px'};
  color: ${(props: {selectec: boolean}) =>
    props.selectec ? Theme.colors.blueViolet : Theme.colors.gray};
  font-family: ${({theme}) => theme.fonts.robotoRegular};
`;

export const Title = styled.Text`
  font-size: 35px;
  font-family: ${({theme}) => theme.fonts.robotoRegular};
`;

export const SecondaryTitle = styled.Text`
  color: ${({theme}) => theme.colors.blueViolet};
  font-family: ${({theme}) => theme.fonts.robotoRegular};
  font-weight: 500;
  font-size: 35px;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.gray};
  font-family: ${({theme}) => theme.fonts.robotoRegular}
  font-weight: 700;
`;

export const BtnBottom = styled.TouchableOpacity`
  width: 90%;
  height: 15%;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-top: auto;
  margin-right: auto;
  bottom: 5%;
  background-color: ${({theme}) => theme.colors.white};
`;

export const BtnTitle = styled.Text`
  color: ${({theme}) => theme.colors.blueViolet};
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
`;
