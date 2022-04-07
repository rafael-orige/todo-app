export type Todos = Array<Todo>;

export type Todo = {
    todo_id: number,
    todo_text: string,
    completed: boolean,
    user_id: number
}