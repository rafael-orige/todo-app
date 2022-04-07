import styled from "styled-components/native";
import { Theme } from "../../types/Theme";

type ThemeProps = {
    theme: Theme
}

export const TodoArea = styled.SafeAreaView<ThemeProps>`
    width: 90%;
    height: 60%;
    background-color: ${props => props.theme.todoBackground};
    box-shadow: 0 5px 50px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 5px;
`;

export const TodoOptions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    padding: 0 30px;
    border-top-width: 1px;
    border-top-color: rgba(155, 155, 155, 0.4);
`;

export const ClearCompletedTodos = styled.TouchableOpacity<ThemeProps>`
`;

export const TextClearCompleted = styled.Text<ThemeProps>`
    color: ${props => props.theme.notSelected};
    font-family: "JosefinSans";
`