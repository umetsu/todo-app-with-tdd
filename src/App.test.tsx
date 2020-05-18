import { render } from "@testing-library/react"
import React from "react"
import { App } from "./App"

test("タスクの追加と一覧表示", () => {
  const { getByText, getByLabelText } = render(<App />)

  getByLabelText(/todo/i)
  getByText(/add/i)
})
