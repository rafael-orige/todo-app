import styled from "styled-components/native";
import { Theme } from "../../types/Theme";

type ThemeProps = {
    theme: Theme
}

export const UserAreaContainer = styled.View<ThemeProps>`
    margin-top: 30px;
    width: 90%;
    height: 60%;
    background-color: ${props => props.theme.todoBackground};
    border-radius: 5px;
    padding: 30px;
`;

export const WelcomeArea = styled.View<ThemeProps>`
`;

export const WelcomeName = styled.Text<ThemeProps>`
    color: ${props => props.theme.fontColor};
    font-family: ${props => props.theme.font};
    font-size: 20px;
`;

export const WelcomeId = styled.Text<ThemeProps>`
    color: ${props => props.theme.fontColor};
    font-family: ${props => props.theme.font};
`;

export const InputsArea = styled.View`
    margin-top: 30px;
    align-items: center;
`;

export const Input = styled.TextInput<ThemeProps>`
    width: 100%;
    background-color: ${props => props.theme.fontColor};
    color: ${props => props.theme.backgroundColor}
    padding: 5px;
    border-radius: 5px;
    margin: 10px 0;
`;

export const SubmitButton = styled.TouchableOpacity<ThemeProps>`
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 18px;
    color: ${props => props.theme.todoBackground};
    background-color: ${props => props.theme.fontColor};
    margin-top: 10px;
`;

export const SubmitButtonText = styled.Text<ThemeProps>`
    color: ${props => props.theme.backgroundColor};
    font-family: ${props => props.theme.font};
    text-align: center;
`;

export const LoadingAnimationArea = styled.View`
    justify-content: center;
    align-items: center;
    height:  90%;
`

export const LoadingAnimation = styled.ActivityIndicator`
`;

export const Credits = styled.TouchableOpacity`
    margin-top: 20px;
`;

export const CreditText = styled.Text<ThemeProps>`
    color: ${props => props.theme.fontColor};
    font-family: ${props => props.theme.font};
`;