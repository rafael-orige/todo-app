import styled from "styled-components/native";

import { Theme } from "../../../type/Theme";

type ThemeProps = {
    theme: Theme,
    filter?: string
}

export const TodoFilterArea = styled.View<ThemeProps>`
    width: 90%;
    border-radius: 5px;
    flex-direction: row;
    padding: 7px;
    margin-top: 25px;
    justify-content: center;
    background-color: ${props => props.theme.todoBackground};
`;

export const TodoFilterItem = styled.TouchableOpacity`

`;

export const TodoFilterItemText = styled.Text<ThemeProps>`
    color: ${props => props.filter === "true" ? props.theme.activeSelection : props.theme.notSelected};
    margin: 0 10px;
`