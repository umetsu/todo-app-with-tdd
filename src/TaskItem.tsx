import React from "react"
import { Task } from "./todo"

type Props = {
  task: Task
}

export function TaskItem({ task }: Props) {
  return <div>{task.content}</div>
}
