import tasksRepository from "../repositories/tasks.repository.js"
import { taskSchema } from "../schema/task.schema.js"

function validateTaskSchema(task) {
  const validation = taskSchema.validate(task, {abortEarly: false})

  if(validation.error) {
    const error = validation.error.details.map(detail => detail.message)
    throw error
  } 
}

async function createTask(task) {
  validateTaskSchema(task)

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

async function updateTask(id, task) {
  const taskExists = await tasksRepository.findTaskById(id)
  validateTaskSchema(task)

  if(taskExists) {
    await tasksRepository.updateTask(id, task)
  }
}

async function deleteTask(id) {
  const taskExists = await tasksRepository.findTaskById(id)

  if(taskExists) {
    await tasksRepository.deleteTask(id)
  }
}

const tasksService = {
  createTask,
  findAllTasks,
  findTaskById,
  updateTask,
  deleteTask,
}

export default tasksService