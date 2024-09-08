import express from "express";
import { getAllTodo, createTodo } from "./todoController";

const todoRouter = express.Router();

todoRouter.get('', getAllTodo)
todoRouter.post('/post', createTodo)

export default todoRouter;