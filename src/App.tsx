import React, { useState } from "react"
import { AddTask } from "./AddTask"
import { TaskList } from "./TaskList"
import { Task } from "./todo"

export function App() {
  const [tasks, setTasks] = useState<ReadonlyArray<Task>>([])

  const handleAddTask = (taskContent: string) => {
    const task: Task = {
      content: taskContent,
    }
    setTasks((tasks) => [task, ...tasks])
  }

  return (
    <div>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}
