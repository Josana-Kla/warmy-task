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

async function deleteTask(id) {
  return prisma.task.delete({
    where: {
      id,
    }
  })
}

const tasksRepository = {
  createTask,
  findAllTasks,
  findTaskById,
  deleteTask,
}

export default tasksRepository