import { Request, Response } from "express";

function getAllTodo(req:Request, res:Response){
    return res.status(200).json('Hello, TypeScript with Express!');
}
function createTodo(req:Request, res:Response){
    const body = req.body;
    console.log(body);
    return res.status(200).json("done")
}


export {getAllTodo, createTodo }