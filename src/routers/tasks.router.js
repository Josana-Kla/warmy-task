import { Router } from 'express'
import { createTask, getTaskById, getTasks, removeTask, updateTask } from '../controllers/tasks.controller.js'

const tasksRouter = Router()

tasksRouter
  .post("/task", createTask)
  .get("/task", getTasks)
  .get("/task/:id", getTaskById)
  .put("/task/:id", updateTask)
  .delete("/task/:id", removeTask)

export default tasksRouter