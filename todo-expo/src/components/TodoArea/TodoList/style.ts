import styled from "styled-components/native";
import { Theme } from "../../../types/Theme";

type ThemeProps = {
    theme: Theme,
    completed?: boolean,
}

export const TodoArea = styled.ScrollView`
`;

export const TodoItemAreaBorder = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: rgba(155, 155, 155, 0.4);
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    padding: 3px 0;
`;

export const TodoItemRemoveArea = styled.TouchableWithoutFeedback`
    margin-right: 10px;
`;

export const TodoItemRemove = styled.TouchableOpacity`
    margin-right: 10px;
`;

export const RemoveButton = styled.Image`

`;

export const TodoItemArea = styled.TouchableOpacity<ThemeProps>`
    width: 90%;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
`;

export const TodoCompleted = styled.View<ThemeProps>`
    width: 100%;
    height: 100%;
    background-color: ${props => props.completed ? "rgba(0, 0, 0, 0)" : props.theme.todoBackground};
    border-radius: 1000;
    align-items: center;
    justify-content: center;
`;

export const TodoCompletedIcon = styled.Image<ThemeProps>`
    opacity: ${props => props.completed ? "1" : "0"};

`

export const TodoItemText = styled.Text<ThemeProps>`
    padding: 13px;
    font-family: 'JosefinSans';
    font-size: 20px;
    color: ${props => props.completed ? props.theme.completedTodo : props.theme.fontColor};
    text-decoration-line: ${props => props.completed ? "line-through" : "none"};
    text-decoration-style: solid;
`;

export const LoadingAnimationArea = styled.View`
    justify-content: center;
    align-items: center;
    height:  90%;
`

export const LoadingAnimation = styled.ActivityIndicator`
`;
