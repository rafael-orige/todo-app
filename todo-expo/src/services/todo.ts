import axios from "axios";
import config from "../../../app.config"
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Todo, Todos } from "../types/Todo";

const url = config.extra.BASE_URL;

export const listUserTodos = async (): Promise<Todos> => {
    const token = await AsyncStorage.getItem("token");
    const id = await AsyncStorage.getItem("user_id");
    const Bearer = `Bearer ${token}`;

    if (id) {
        let todos: Todos = await axios({
            method: 'get',
            url: url + '/' + id + '/todos',
            headers: {
                Authorization: Bearer,
                id: id
            }
        }).then(res => {
            if (typeof res.data.todos !== 'undefined') return res.data.todos
            else return []
        });

        return todos
    } else return []
};

export const createTodo = async (content: string): Promise<{ status: string, newTodo: Todo }> => {
    const token = await AsyncStorage.getItem("token");
    const id = await AsyncStorage.getItem("user_id");
    const Bearer = `Bearer ${token}`;

    let newTodo: { status: string, newTodo: Todo } = await axios({
        method: 'post',
        url: url + '/' + id + '/create_todo',
        headers: {
            Authorization: Bearer
        },
        data: `text=${content}`
    }).then(res => {
        return res.data
    });
    return newTodo;
}

export const setTodoCompleted = async (todoId: number, status: boolean): Promise<Todo> => {
    const token = await AsyncStorage.getItem("token");
    const id = await AsyncStorage.getItem("user_id");
    const Bearer = `Bearer ${token}`;

    let res = await axios({
        method: 'put',
        url: url + '/' + id + '/update_todo',
        headers: {
            Authorization: Bearer
        },
        data: `completed=${status}&id=${todoId}`
    }).then((res) => (res.data));

    return res;
}

export const deleteAllCompleted = async () => {
    const token = await AsyncStorage.getItem("token");
    const id = await AsyncStorage.getItem("user_id");
    const Bearer = `Bearer ${token}`;

    await axios({
        method: 'delete',
        url: url + '/' + id + '/delete_completed_todos',
        headers: {
            Authorization: Bearer
        }
    })
};

export const deleteTodo = async (todoId: number) => {
    const token = await AsyncStorage.getItem("token");
    const id = await AsyncStorage.getItem("user_id");
    const Bearer = `Bearer ${token}`;

    await axios({
        method: 'delete',
        url: url + '/' + id + '/delete_todo',
        headers: {
            Authorization: Bearer,
            id: todoId
        }
    })
}
