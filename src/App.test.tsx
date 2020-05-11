import { render } from "@testing-library/react"
import React from "react"
import App from "./App"
import { Task } from "./todo"

test("タスクの一覧表示", () => {
  const tasks: ReadonlyArray<Task> = [
    { content: "task1" },
    { content: "task2" },
  ]
  const { getAllByText } = render(<App tasks={tasks} />)

  expect(getAllByText(/task./i)).toHaveLength(tasks.length)
})
