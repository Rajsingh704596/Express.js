// so we can create multiple routes for multiple module , so it's help for reusable routes 
import express from "express";

const router = express.Router();


router.get("/about",(req,res)=>{
    res.status(200).send("router help for separate module create so app.js/server.js is cleaner")
})

// default export
// export default router;

// name export
export const separateRoutes = router; 