import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddTask } from "./AddTask"
import { TaskList } from "./TaskList"
import { addTask, selectTasks, Task, toggleCompleted } from "./todo"

export function App() {
  const dispatch = useDispatch()
  const tasks = useSelector(selectTasks)

  const handleAddTask = (taskContent: string) => {
    dispatch(addTask({ content: taskContent }))
  }

  const handleItemClick = (selectedTask: Task) => {
    dispatch(toggleCompleted({ id: selectedTask.id }))
  }

  return (
    <div>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onItemClick={handleItemClick} />
    </div>
  )
}
