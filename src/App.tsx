import React from "react"
import { TaskList } from "./TaskList"
import { Task } from "./todo"

type Props = {
  tasks?: ReadonlyArray<Task>
}

function App({ tasks = [] }: Props) {
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
