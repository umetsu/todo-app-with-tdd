import React, { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "./todo"

export function App() {
  const [tasks, setTasks] = useState<ReadonlyArray<Task>>([])
  const [inputValue, setInputValue] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputValue.trim()) {
      return
    }

    const task: Task = {
      content: inputValue,
    }
    setTasks((tasks) => [task, ...tasks])
    setInputValue("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={"task-input"}>Todo:</label>
        <input id={"task-input"} value={inputValue} onChange={handleChange} />
        <button type={"submit"}>Add</button>
      </form>
      {tasks.length === 0 ? (
        <div>Empty</div>
      ) : (
        tasks.map((task, index) => <div key={index}>{task.content}</div>)
      )}
    </div>
  )
}
