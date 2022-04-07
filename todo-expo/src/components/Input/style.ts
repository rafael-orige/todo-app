import styled from "styled-components/native";

import { Theme } from "../../type/Theme";

type ThemeProps = {
    theme: Theme
}

export const InputArea = styled.View`
    width: 90%;
    height: 50px;
    margin: 20px;
    align-items: center;
`;

export const Input = styled.TextInput.attrs((props: ThemeProps) => ({
    placeholderTextColor: props.theme.fontColor
})) <ThemeProps>`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    font-size: 18px;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.todoBackground};
    border: none;
`