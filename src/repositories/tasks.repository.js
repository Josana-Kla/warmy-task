import prisma from '../config/prisma.js'

async function createTask(task) {
  return prisma.task.create({
    data: task
  })
}

async function findAllTasks() {
  return prisma.task.findMany()
}

async function findTaskById(id) {
  return prisma.task.findUniqueOrThrow({
    where: {
      id,
    }
  })
}

const tasksRepository = {
  createTask,
  findAllTasks,
  findTaskById,
}

export default tasksRepository