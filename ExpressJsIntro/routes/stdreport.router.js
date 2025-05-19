import { Router } from "express";

const router = Router();

router.get("/report",(req,res)=>{ 
    // here we want to render ejs file
    res.render("stdreport",{name:"Rock"});        // so when hit url http://localhost:3000/api/report then stdreport ejs file render , and here dynamic content pass key and value form 

})


router.get("/report/student",(req,res)=>{ 

    const student={
        name:"Rock",
        age:21,
        grade:"10th",
    }
   
    res.render("stdreport",{name:"Royal", student});        // so when hit url http://localhost:3000/api/report/student then stdreport ejs file render , and Object pass as a dynamic content

})


// router create for multi student report
router.get("/report/students",(req,res)=>{
      const students=[
        {  name:"Rock",   age:21,   grade:"10th" },
        {  name:"Royal",  age:25,   grade:"10th" },               
        {  name:"Root",   age:21,   grade:"10th" },               
        {  name:"Veer",   age:24,   grade:"10th" },               
        {  name:"Raj",   age:22,   grade:"10th" },               
        {  name:"Roy",   age:21,   grade:"10th" },               
      ];

      res.render("stdmultireport",{students});
})

export const reportRouter =router;