import React from "react"
import { TaskItem } from "./TaskItem"
import { Task } from "./todo"

type Props = {
  tasks: ReadonlyArray<Task>
}

export function TaskList({ tasks }: Props) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  )
}
