import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: false
    },
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        }
    }
})

export const { setTodos } = todoSlice.actions;
export default todoSlice.reducer;