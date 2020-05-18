import React, { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "./todo"

export function App() {
  const [task, setTask] = useState<Task | null>(null)
  const [inputValue, setInputValue] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const task: Task = {
      content: inputValue,
    }
    setTask(task)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={"task-input"}>Todo:</label>
        <input id={"task-input"} value={inputValue} onChange={handleChange} />
        <button type={"submit"}>Add</button>
      </form>
      {task && <div>{task.content}</div>}
    </div>
  )
}
