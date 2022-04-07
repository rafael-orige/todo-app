import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { listUserTodos, deleteAllCompleted } from "../../services/todo";
import { useSelector, useDispatch } from "react-redux";
import { setTodos as Reload } from "../../redux/reducers/todoReducer";
import { RootState } from "../../redux/store";

import { Todos, Todo } from "../../types/Todo";

import Background from "../Background";
import Input from "../Input";

import TodoList from "./TodoList";
import TodoTextLeft from "./TodoLeftText";
import Filter from "./Filter";

import * as T from "./style";

function TodoArea() {
    const dispatch = useDispatch();

    const key = useSelector((state: RootState) => state.todos.todos)
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState<Todos>();
    const [filter, setFilter] = useState("all");

    async function getTodos() {
        setLoading(true);
        let token = await AsyncStorage.getItem("token");

        if (token) {
            setTodos(await listUserTodos());
        }
        setLoading(false);
    }

    async function clearCompletedTodos() {
        if (todos && todos.filter((item: Todo) => item.completed ? item : null).length > 0) {
            setLoading(true)
            await deleteAllCompleted();
            dispatch(Reload(!key));
            setLoading(false);
        } else return
    }

    useEffect(() => {
        getTodos();
    }, [key])
    return (
        <Background>
            <Input />
            <T.TodoArea>
                <>
                    <TodoList todos={todos} filter={filter} loading={loading} />

                    <T.TodoOptions>
                        <TodoTextLeft todos={todos} filter={filter} />
                        <T.ClearCompletedTodos onPress={clearCompletedTodos}>
                            <T.TextClearCompleted>Clear Completed</T.TextClearCompleted>
                        </T.ClearCompletedTodos>
                    </T.TodoOptions>
                </>
            </T.TodoArea>
            <Filter filter={filter} setFilter={setFilter} />
        </Background>
    )
}

export default TodoArea