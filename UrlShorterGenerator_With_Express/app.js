//! Creating a Server and Serve HTML file -  (Backend part)

import express from "express";
// import router from "./routes/shortener.routes.js";     //router import here , must use .js in express when import js file
import { shortenerRoutes } from "./routes/shortener.routes.js";    // .js must be write when import js file in express

const app=express();   // create instance

//^ Static file(css..) serve in Express using middleware
app.use(express.static("public"));       // here public folder only store css file
app.use(express.urlencoded({extended: true}));    // must be used to handle object data get from 


//express router 
// app.use(router);     //default import 
app.use(shortenerRoutes);

const PORT= 3000;        //port no create

//listen to Our sever
app.listen(PORT ,()=>{
  console.log(`Server running at http://localhost:${PORT}`)
})