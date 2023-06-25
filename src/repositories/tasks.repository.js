import prisma from '../config/prisma.js';

async function createTask(task) {
  return prisma.task.create({
    data: {
      title: task.title,
      description: task.description,
    },
  });
}

async function findAllTasks() {
  return prisma.task.findMany();
}

async function findTaskById(id) {
  return prisma.task.findUniqueOrThrow({
    where: {
      id,
    },
  });
}

async function updateTask(id, task) {
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      title: task.title,
      description: task.description,
      status: task.status,
    },
  });
}

async function deleteTask(id) {
  return prisma.task.delete({
    where: {
      id,
    },
  });
}

const tasksRepository = {
  createTask,
  findAllTasks,
  findTaskById,
  updateTask,
  deleteTask,
};

export default tasksRepository;
