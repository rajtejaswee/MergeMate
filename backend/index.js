import express from "express"
import dotenv from "dotenv"
import app from "./app.js"

dotenv.config({
    path: './env'
})

//app is listening at the port
app.listen(process.env.PORT || 80000, () => {
    console.log(`Server is running at port : ${process.env.PORT}`)
})

