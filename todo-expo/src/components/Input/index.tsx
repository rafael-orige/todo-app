import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createTodo } from "../../services/todo";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setTodos } from "../../redux/reducers/todoReducer";

import { Todo } from "../../types/Todo";

import * as I from "./style";


function Input() {
    const dispatch = useDispatch();

    const key = useSelector((state: RootState) => state.todos.todos);

    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState<string>("");
    async function sendTodo() {
        if (content !== "") {
            let token = await AsyncStorage.getItem("token");

            if (token) {
                setLoading(false);
                let newTodo: {
                    status: string,
                    newTodo: Todo
                } = await createTodo(content)

                if (newTodo.status === "Todo criado com sucesso.") {
                    dispatch(setTodos(!key));
                    setContent("");
                }

                setLoading(true);
            }
        }

    }
    return (
        <I.InputArea>
            <I.Input
                placeholder='Insert a new todo...'
                editable={loading}
                value={content}
                onChangeText={event => setContent(event)}
                onSubmitEditing={sendTodo}
            />
        </I.InputArea>
    )
}

export default Input