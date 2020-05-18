import { render } from "@testing-library/react"
import user from "@testing-library/user-event"
import React from "react"
import { App } from "./App"

test("タスクの追加と一覧表示", () => {
  const { getByText, getByLabelText } = render(<App />)

  const taskInput = getByLabelText(/todo/i)
  const addButton = getByText(/add/i)

  user.type(taskInput, "task1")
  user.click(addButton)
  expect(getByText(/task1/i)).toBeInTheDocument()
  expect(taskInput).toHaveValue("")
})
