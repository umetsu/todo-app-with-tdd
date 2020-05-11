import React from "react"
import { Task } from "./todo"

type Props = {
  tasks?: ReadonlyArray<Task>
}

function App({ tasks = [] }: Props) {
  return (
    <div>
      {tasks?.map((task, index) => (
        <div key={index}>{task.content}</div>
      ))}
    </div>
  )
}

export default App
