import { render } from "@testing-library/react"
import user from "@testing-library/user-event"
import React from "react"
import { App } from "./App"

test("タスクの追加と一覧表示", () => {
  const { getByText, getAllByText, getByLabelText, queryByText } = render(
    <App />
  )
  expect(getByText(/empty/i)).toBeInTheDocument() // Emptyが表示されていること

  const taskInput = getByLabelText(/todo/i)
  const addButton = getByText(/add/i)

  // 空文字ならタスクは追加されない
  user.type(taskInput, "")
  user.click(addButton)
  expect(getByText(/empty/i)).toBeInTheDocument()

  // スペースでも同様に追加されない
  user.type(taskInput, " ")
  user.click(addButton)
  expect(getByText(/empty/i)).toBeInTheDocument()

  // 1件表示
  user.type(taskInput, "task1")
  user.click(addButton)
  expect(getByText(/task1/i)).toBeInTheDocument()
  expect(taskInput).toHaveValue("")
  expect(queryByText(/empty/i)).not.toBeInTheDocument() // Emptyが非表示になっていること

  // 複数件表示
  user.type(taskInput, "task2")
  user.click(addButton)
  expect(getAllByText(/task./i)).toHaveLength(2)
})
