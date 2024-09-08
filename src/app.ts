// src/index.ts
import express, { json } from 'express';
import todoRouter from './router/todo/todoRouter';
import userRouter from './router/user/userRouter';



const app = express();
app.use(json())

app.use('/todo', todoRouter);
app.use('/user', userRouter)


export default app;