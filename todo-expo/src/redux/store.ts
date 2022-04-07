import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./reducers/themeReducer";
import todoReducer from "./reducers/todoReducer";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        todos: todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>