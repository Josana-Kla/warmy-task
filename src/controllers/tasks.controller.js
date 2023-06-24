import httpStatus from "http-status";
import tasksService from "../services/tasks.service.js";

export async function createTask(req, res) {
  const task = req.body;

  try {
    await tasksService.createTask(task)
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getTasks(res) {
  try {
    const tasks = await tasksService.findAllTasks()
    return res.status(httpStatus.OK).send(tasks);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getTaskById(req, res) {
  console.log("t")
}

export async function updateTask(req, res) {
  console.log("t")
}

export async function removeTask(req, res) {
  console.log("t")
}

