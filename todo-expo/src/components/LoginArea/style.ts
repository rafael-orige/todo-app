import styled from 'styled-components/native';
import { Theme } from '../../types/Theme';

type ThemeProps = {
  changeSize?: number
  theme: Theme
}

export const Page = styled.KeyboardAvoidingView<ThemeProps>`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: ${props => props.changeSize}%;
  border-radius: 5px;
  background-color: ${props => props.theme.todoBackground};
`;

export const Title = styled.Text<ThemeProps>`
  text-align: center;
  font-size: 30px;
  color: ${props => props.theme.hoverSelection};
  padding: 10px;
  font-family: ${props => props.theme.font};
`;

export const Form = styled.ScrollView`
  position: relative;
  height: 100%
  width: 100%
  padding: 10px;
`;

export const Input = styled.TextInput.attrs((props: ThemeProps) => ({
  placeholderTextColor: props.theme.fontColor,
  borderBottomWidth: 1,
  borderBottomColor: props.theme.fontColor,
})) <ThemeProps>`
  width: 100%;
  padding: 5px 10px;
  font-size: 18px;
  color: ${props => props.theme.fontColor};
  margin-bottom: 25px;
  font-family: 'JosefinSans';
`;

export const Submit = styled.TouchableOpacity<ThemeProps>`
  border-radius: 50px;
  padding: 10px 20px;
  background-color: ${props => props.theme.activeSelection};
`;

export const SubmitText = styled.Text`
  color: #fffefd;
  font-size: 18px;
  text-align: center;
`;

export const ChangeFormArea = styled.TouchableOpacity``;

export const ChangeForm = styled.Text<ThemeProps>`
  text-align: center;
  font-size: 15px;
  color: ${props => props.theme.hoverSelection};
  margin-top: 20px;
  font-family: 'JosefinSans';
`;

export const LoadingAnimation = styled.ActivityIndicator`
`



export const WarningBackground = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
`;

export const WarningArea = styled.View<ThemeProps>`
  width: 90%;
  height: 20%;
  background-color: ${props => props.theme.todoBackground};
  border-radius: 5px;
`;

export const WarningTextArea = styled.View`
  justify-content: center;
  width: 100%;
  height: 65%;
`;

export const WarningText = styled.Text<ThemeProps>`
  padding: 10px;
  color: ${props => props.theme.fontColor};
  text-align: center;
`;

export const WarningButtonArea = styled.View`
  align-items: center;
  width: 100%;
  height: 40%;
`;

export const WarningButton = styled.Button`
`