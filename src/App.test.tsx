import user from "@testing-library/user-event"
import React from "react"
import { App } from "./App"
import { render } from "./test/utils"
import { Task } from "./todo"

test("タスクの追加と一覧表示", async () => {
  const { findByText, findAllByText, findByLabelText, queryByText } = render(
    <App />
  )
  expect(await findByText(/empty/i)).toBeInTheDocument()

  const taskInput = await findByLabelText(/todo/i)
  const addButton = await findByText(/add/i)

  // 空文字ならタスクは追加されない
  await user.type(taskInput, "")
  user.click(addButton)
  expect(await findByText(/empty/i)).toBeInTheDocument()

  // スペースでも同様に追加されない
  await user.type(taskInput, " ")
  user.click(addButton)
  expect(await findByText(/empty/i)).toBeInTheDocument()

  // 1件表示
  await user.type(taskInput, "task1")
  user.click(addButton)
  expect(await findByText(/task1/i)).toBeInTheDocument()
  expect(taskInput).toHaveValue("")
  expect(queryByText(/empty/i)).not.toBeInTheDocument()

  // 2件目追加
  await user.type(taskInput, "task2")
  user.click(addButton)
  expect(await findByText(/task2/i)).toBeInTheDocument()

  // 複数件表示
  expect(await findAllByText(/task./i)).toHaveLength(2)
})

test("タスクの完了状態の切り替え", async () => {
  const tasks: ReadonlyArray<Task> = [
    { id: "id1", content: "task1", completed: false },
    { id: "id2", content: "task2", completed: false },
  ]

  const { findAllByLabelText } = render(<App />, {
    initialState: {
      todo: {
        tasks: tasks,
      },
    },
  })

  const [checkbox1, checkbox2] = await findAllByLabelText(/task./i)
  user.click(checkbox1)
  expect(checkbox1).toBeChecked()
  expect(checkbox2).not.toBeChecked() // 別のタスクには影響がないこと

  user.click(checkbox1)
  expect(checkbox1).not.toBeChecked()
  expect(checkbox2).not.toBeChecked()
})
