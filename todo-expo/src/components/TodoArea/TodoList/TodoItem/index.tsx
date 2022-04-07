import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import * as T from "../style";
import { Todo } from "../../../../types/Todo";

type Props = {
    item: Todo,
    index: number,
    todosLenght: number
    setCompleted: (item: Todo) => void,
    removeTodo: () => void,
}

export default function TodoItem({ item, index, todosLenght, setCompleted, removeTodo }: Props) {
    return (
        <T.TodoItemAreaBorder style={index === todosLenght - 1 ? { borderBottomWidth: 0 } : null}>
            <T.TodoItemArea
                onPress={async () => {
                    setCompleted(item);
                }}>
                <LinearGradient colors={['#57ddff', '#c058f3']} style={{
                    height: 20,
                    width: 20,
                    padding: 2,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <T.TodoCompleted completed={item.completed}>
                        <T.TodoCompletedIcon completed={item.completed} source={require("../../../../assets/icon-check.png")} />
                    </T.TodoCompleted>
                </LinearGradient>
                <T.TodoItemText completed={item.completed}>{item.todo_text}</T.TodoItemText>
            </T.TodoItemArea>

            <T.TodoItemRemoveArea onPress={(event) => event.stopPropagation()}>
                <T.TodoItemRemove onPress={removeTodo}>
                    <T.RemoveButton source={require("../../../../assets/icon-cross.png")} />
                </T.TodoItemRemove>
            </T.TodoItemRemoveArea>

        </T.TodoItemAreaBorder>
    )
}