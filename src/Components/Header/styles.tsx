import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  height: 30%;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  width: 80%;
  color: ${({theme}) => theme.colors.white};
`;

export const BackButton = styled.TouchableOpacity``;

export const LeftIcon = styled(Icon).attrs({
  name: 'left',
})`
  color: ${({theme}) => theme.colors.white};
  font-weight: 700;
  font-size: 22px;
`;
