import React from "react"

import { Todos } from "../../../types/Todo";

import * as T from "./style";

type Props = {
    filter: string,
    todos: Todos | undefined
}

export default function TodoTextLeft({ filter, todos }: Props) {

    if (filter === "all" && todos && todos.length > 0) {
        return <T.Text>{todos.length} todos</T.Text>
    } else if (filter === "active" && todos) {
        return <T.Text>{todos.filter(item => !item.completed ? item : null).length} active</T.Text>
    } else if (filter === "completed" && todos) {
        return <T.Text>{todos.filter(item => item.completed ? item : null).length} completed</T.Text>
    } else {
        return <T.Text>No todos</T.Text>
    }
}