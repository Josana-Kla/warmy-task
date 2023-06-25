import { Router } from 'express';
import {
  createTask, getTaskById, getTasks, removeTask, updateTask,
} from '../controllers/tasks.controller.js';

const tasksRouter = Router();

tasksRouter
  .post('/', createTask)
  .get('/', getTasks)
  .get('/:id', getTaskById)
  .put('/:id', updateTask)
  .delete('/:id', removeTask);

export default tasksRouter;
