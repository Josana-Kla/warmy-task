import httpStatus from 'http-status';
import tasksService from '../services/tasks.service.js';

export async function createTask(req, res) {
  const task = req.body;

  try {
    await tasksService.createTask(task);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getTasks(req, res) {
  try {
    const tasks = await tasksService.findAllTasks();
    return res.status(httpStatus.OK).send(tasks);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getTaskById(req, res) {
  const id = Number(req.params.id);

  try {
    const taskById = await tasksService.findTaskById(id);
    return res.status(httpStatus.OK).send(taskById);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function updateTask(req, res) {
  const id = Number(req.params.id);
  const task = req.body;

  try {
    await tasksService.updateTask(id, task);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function removeTask(req, res) {
  const id = Number(req.params.id);

  try {
    await tasksService.deleteTask(id);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
