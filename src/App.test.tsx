import { render } from "@testing-library/react"
import user from "@testing-library/user-event"
import React from "react"
import { App } from "./App"

test("タスクの追加と一覧表示", () => {
  const { getByText, getByLabelText } = render(<App />)

  user.type(getByLabelText(/todo/i), "task1")
  user.click(getByText(/add/i))

  expect(getByText(/task1/i)).toBeInTheDocument()
})
