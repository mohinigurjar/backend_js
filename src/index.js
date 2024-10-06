// require('dotenv').config({path: "./env"})
import dotenv from "dotenv"

import connectDB from "./db/index.js"

dotenv.config({
  path: "./env"
})
connectDB()





















/*
import express from "express"
const app = express()

( async () => {
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  //MONGODB_URI comes from .env
    app.on("error", () => {
      console.log("ERR: ", error);
      throw error
    })

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.port}`)
    })
  }catch (error) {
    console.error("ERROR: ", error)
    throw error

  }
})()
  */