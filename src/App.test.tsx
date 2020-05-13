import { render } from "@testing-library/react"
import React from "react"
import App from "./App"
import { Task } from "./todo"

test("タスクの一覧表示", () => {
  const { getByText, getAllByText, rerender } = render(<App />)
  expect(getByText(/empty/i)).toBeInTheDocument()

  const tasks: ReadonlyArray<Task> = [
    { content: "task1" },
    { content: "task2" },
  ]
  rerender(<App tasks={tasks} />)
  expect(getAllByText(/task./i)).toHaveLength(tasks.length)
})
