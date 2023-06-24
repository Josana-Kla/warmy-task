import prisma from '../config/prisma.js'

async function createTask(task) {
  return prisma.task.create({
    data: task
  })
}

async function findAllTasks() {
  return prisma.task.findMany()
}

const tasksRepository = {
  createTask,
  findAllTasks,
}

export default tasksRepository