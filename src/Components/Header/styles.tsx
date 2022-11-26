import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {backButtonType} from '.';
import Theme from '../../theme/styles';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.robotoRegular};
  color: ${({theme}) => theme.colors.white};
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  width: 80%;
`;

export const BackButton = styled.TouchableOpacity`
  ${(props: {position: string}) =>
    props.position === 'dark' &&
    `
      margin-right: auto
    `}
`;

export const LeftIconLight = styled(Icon).attrs({
  name: 'left',
})`
  color: ${({theme}) => theme.colors.white};
  font-weight: 700;
  font-size: 22px;
`;

export const LeftIcon = styled(Icon).attrs({
  name: 'left',
})`
  color: ${(props: {typeIcon: backButtonType}) =>
    props.typeIcon === 'dark' ? Theme.colors.dark : Theme.colors.white}
  font-weight: 700;
  float: left;
  font-size: 22px;
`;
