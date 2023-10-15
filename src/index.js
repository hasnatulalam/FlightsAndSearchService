const express =require("express");
const {PORT}=require('./config/serverConfig')

const setupStartServer =async ()=>{
  // create  the express object
  const app =express();
  
  app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
  })
}

setupStartServer()