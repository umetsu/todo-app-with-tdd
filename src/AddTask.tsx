import React, { ChangeEvent, FormEvent, useState } from "react"

type Props = {
  onAddTask: (taskContent: string) => void
}

export function AddTask({ onAddTask }: Props) {
  const [inputValue, setInputValue] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue.trim()) {
      return
    }
    onAddTask(inputValue)
    setInputValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={"task-input"}>Todo:</label>
      <input id={"task-input"} value={inputValue} onChange={handleChange} />
      <button type={"submit"}>Add</button>
    </form>
  )
}
