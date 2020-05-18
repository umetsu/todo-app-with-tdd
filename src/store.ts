import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "./todo"

export const reducer = {
  todo: todoReducer,
}

export const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>
