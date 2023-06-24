import tasksRepository from "../repositories/tasks.repository.js"
import { taskSchema } from "../schema/task.schema.js"

async function createTask(task) {
  const validation = taskSchema.validate(task, {abortEarly: false})

  if(validation.error) {
    const error = validation.error.details.map(detail => detail.message)
    throw error
  } 

  await tasksRepository.createTask(task)
}

async function findAllTasks() {
  const tasks = await tasksRepository.findAllTasks()

  return tasks
}

async function findTaskById(id) {
  const taskById = await tasksRepository.findTaskById(id)

  return taskById
}

const tasksService = {
  createTask,
  findAllTasks,
  findTaskById,
}

export default tasksService