import prisma from '../config/prisma.js'

async function createTask(task) {
  return prisma.task.create({
    data: task
  })
}


const tasksRepository = {
  createTask,

}

export default tasksRepository