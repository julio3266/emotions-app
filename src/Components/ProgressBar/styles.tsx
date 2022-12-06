import styled from 'styled-components/native';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Theme from '@theme/styles';

export const Progress = styled(Animated.View)``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  bottom: 5%;
`;

export const PercentsContainer = styled.View`
  position: absolute;
  flex-direction: row;
  top: -80px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  justify-content: space-around;
  align-items: center;
`;

export const EmotionsContainer = styled.View`
  position: absolute;
  flex-direction: row;
  top: 40px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  justify-content: space-around;
  height: 30px;
  align-items: center;
`;

export const PercentTitle = styled.Text`
  font-size: ${(props: {selected: boolean}) =>
    props.selected ? '25px' : '20px'};
  bottom: ${(props: {selected: boolean}) => (props.selected ? '30px' : '18px')};
  color: ${(props: {selected: boolean}) =>
    props.selected ? Theme.colors.blueViolet : Theme.colors.gray};
  font-family: ${({theme}) => theme.fonts.robotoRegular};
`;

export const EmotionsData = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.robotoRegular};
  font-size: ${(props: {selected: boolean}) => (props.selected ? '25px' : '0')};
  top: ${(props: {selected: boolean}) => (props.selected ? '30px' : '18px')};
  font-size: 15px;
  font-weight: 700;
`;

export const DragDropView = styled(Animated.View)`
  flex-direction: column;
  margin-right: auto;
  position: absolute;
  left: 3%;
`;

export const DragDropBtn = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.white};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  left: 35%
  width: 50px;
  top: 20%;
  height: 50px;
`;

export const IconBars = styled(Icon).attrs({
  name: 'menu',
  size: 30,
})`
  color: ${({theme}) => theme.colors.gray};
`;

export const WaveContainer = styled.View`
  position: absolute;
  bottom: 30px;
`;
