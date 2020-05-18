import { render } from "@testing-library/react"
import user from "@testing-library/user-event"
import React from "react"
import { App } from "./App"

test("タスクの追加と一覧表示", () => {
  const { getByText, getAllByText, getByLabelText } = render(<App />)

  const taskInput = getByLabelText(/todo/i)
  const addButton = getByText(/add/i)

  // 1件表示
  user.type(taskInput, "task1")
  user.click(addButton)
  expect(getByText(/task1/i)).toBeInTheDocument()
  expect(taskInput).toHaveValue("")

  // 複数件表示
  user.type(taskInput, "task2")
  user.click(addButton)
  expect(getAllByText(/task./i)).toHaveLength(2)
})
