import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

export type Task = {
  id: string
  content: string
  completed: boolean
}

type TodoState = {
  tasks: ReadonlyArray<Task>
}

const initialState: TodoState = {
  tasks: [],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ content: string }>) => {
      const task: Task = {
        id: randomString(),
        content: action.payload.content,
        completed: false,
      }
      state.tasks.push(task)
    },
    toggleCompleted: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.map((t) => ({
        ...t,
        completed: t.id === action.payload.id ? !t.completed : t.completed,
      }))
    },
  },
})

// Action
export const { addTask, toggleCompleted } = todoSlice.actions

// Selector
export function selectTasks(state: RootState): ReadonlyArray<Task> {
  return state.todo.tasks
}

// Reducer
export const todoReducer = todoSlice.reducer

// Helper
function randomString(): string {
  return Math.random().toString(36).substring(7)
}
