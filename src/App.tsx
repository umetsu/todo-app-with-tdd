import React, { useState } from "react"
import { AddTask } from "./AddTask"
import { TaskList } from "./TaskList"
import { Task } from "./todo"

type Props = {
  tasks?: ReadonlyArray<Task>
}

export function App({ tasks: initialTasks = [] }: Props) {
  const [tasks, setTasks] = useState<ReadonlyArray<Task>>(initialTasks)

  const handleAddTask = (taskContent: string) => {
    const task: Task = {
      id: randomString(),
      content: taskContent,
      completed: false,
    }
    setTasks((tasks) => [task, ...tasks])
  }

  const handleItemClick = (selectedTask: Task) => {
    setTasks((tasks) =>
      tasks.map((t) => ({
        ...t,
        completed: t.id === selectedTask.id ? !t.completed : t.completed,
      }))
    )
  }

  return (
    <div>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onItemClick={handleItemClick} />
    </div>
  )
}

function randomString(): string {
  return Math.random().toString(36).substring(7)
}
