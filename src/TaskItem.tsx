import React from "react"
import { Task } from "./todo"

type Props = {
  task: Task
  onItemClick: (task: Task) => void
}

export function TaskItem({ task, onItemClick }: Props) {
  const handleClick = () => {
    onItemClick(task)
  }

  return (
    <div>
      <label
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        <input
          type={"checkbox"}
          readOnly
          checked={task.completed}
          onClick={handleClick}
        />
        {task.content}
      </label>
    </div>
  )
}
