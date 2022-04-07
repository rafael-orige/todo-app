import React, { useEffect, useState } from 'react'
import { GestureResponderHandlers } from 'react-native';
import { deleteTodo, setTodoCompleted } from "../../../services/todo";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setTodos } from '../../../redux/reducers/todoReducer';

import { Todos, Todo } from "../../../types/Todo";

import TodoItem from "./TodoItem";

import * as T from "./style";

type Props = {
    todos: Todos | undefined,
    filter: string,
    loading: boolean
}

export default function TodoList({ todos, filter, loading }: Props) {
    const dispatch = useDispatch();

    const key = useSelector((state: RootState) => state.todos.todos);
    const [todosFiltered, setTodosFiltered] = useState<Todos>();

    async function setCompleted(item: Todo) {
        let newTodo = await setTodoCompleted(item.todo_id, !item.completed);
        if (newTodo.completed !== item.completed) {
            dispatch(setTodos(!key));
        }
    }

    useEffect(() => {
        if (todos) {
            if (filter === "completed") {
                setTodosFiltered(todos.filter((item: Todo) => item.completed ? item : null))
            } else if (filter === "active") {
                setTodosFiltered(todos.filter((item: Todo) => !item.completed ? item : null));
            }
        }

    }, [filter, todos])

    /*LOGIC:
        If loading is true, then switches to the loading animation.
        Else, checks if todo is not undefined and if its lenght is bigger than 0.
        After, it checks if filter is equal to "all", if not, it will filter all the todos depending on the filter.
        
        If todo is undefined or equal to 0, a message will be displayed asking the user to create a new todo.
    */

    if (!loading) return (
        <T.TodoArea>


            {(todos && todos.length > 0) ? (
                (filter === "all" ? todos : (
                    (todosFiltered && todosFiltered.length > 0) ? todosFiltered : todos))
                    .map((item: Todo, index: number) => (
                        <TodoItem
                            key={index}
                            item={item}
                            index={index}
                            todosLenght={todos.length}
                            setCompleted={() => setCompleted(item)}
                            removeTodo={() => {
                                deleteTodo(item.todo_id)
                                dispatch(setTodos(!key));
                            }}
                        />
                    ))
            ) : (
                <T.TodoItemText>Try adding a new todo</T.TodoItemText>
            )}
        </T.TodoArea>
    )
    else return <T.LoadingAnimationArea><T.LoadingAnimation size="large" color="white" /></T.LoadingAnimationArea>
}