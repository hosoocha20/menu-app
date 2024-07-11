import express, { Request, Response } from "express";

//import cors from 'cors';
require('dotenv').config()
const app = express();



app.get('/', (req: Request, res: Response) => {
    res.send("hello word")
})

app.listen(`${process.env.PORT}`, () =>{
    console.log(`Listening to PORT ${process.env.PORT}`)
});