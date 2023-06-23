import express from 'express';
import tasksRouter from './routers/tasks.router.js';

const app = express();
app
  .use(express.json())
  .use("/tasks", tasksRouter)  

export default app;
