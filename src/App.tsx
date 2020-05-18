import React from "react"

export function App() {
  return (
    <div>
      <form>
        <label htmlFor={"task-input"}>Todo:</label>
        <input id={"task-input"} />
        <button type={"submit"}>Add</button>
      </form>
    </div>
  )
}
