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

const tasksService = {
  createTask,
}

export default tasksService