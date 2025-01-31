import  {readFile, writeFile} from 'fs/promises';           //we use FS Promises (Async await) version to read and write the files Asynchronously  
import crypto from 'crypto';
import path from "path";

// import express from 'express';
// const router = express.Router();

import { Router } from 'express';  //here direct destructure

const router = Router();  //instance create  , so now routes create just change app.get into router.get

const Data_File= path.join("data",'links.json');  //data file create must , if links.json not create so below we create empty object in link.json file            ,  basically this code used for data get from data folder

const serveFile=async(res, filePath, contentType)=>{
    try {
        const data= await readFile(filePath)                
        res.writeHead(200, {'Content-Type':contentType});   
        res.end(data);        
    } catch (error) {
        res.writeHead(404, {'Content-Type': "text/plain"});            
        res.end("404 Page not found")
    }
}

//# data get from data server using fs/promises async/await  , FS module return promises 
const loadLinks =async()=>{
    try {
        const data = await readFile(Data_File, "utf-8");      // link.json file read
        return JSON.parse(data);                       //data change into javascript object form which we want when we get data from server
    } catch (error) {
        if(error.code === "ENOENT"){  //ENOENT  - Error No Entry ,   it means file not exist/present
           await writeFile(Data_File , JSON.stringify( {} ))    // file(links.json) not exist so server m empty object file(links.json) create kar tho jis se json string formate m change kar tho server m bhe-jne k li ye 
           return {};          // return empty obj
        }
     console.error("Error reading file:", error);  // Log any other errors
       throw error;  
    }
}

//# fun create for data(frontend data) add/write inside links.json file using Fs/ promises async/await to write file
const saveLinks= async(links)=>{         //links get as a parameter where key and value pass which is object formate
    await writeFile(Data_File, JSON.stringify(links))     //data ko object format se JSON string format m change kar ke Data_File m write kar ege
        
}

//# Create the server
router.get("/",async(req,res)=>{
    try {
       const file =await readFile(path.join("views","index.html"));       //fs module use to readfile index.html inside views folder 
       const links=await loadLinks();    //here loadLinks is fun. which is define above and use for data(links.json)share to frontend   
       const content = file.toString().replaceAll("{{shortened_urls}}",
                        Object.entries(links).map(([shortCode, url])=>{  // here shortcode is key , url is value , here we directly destructure
                          return  `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode}</a> - ${url}</li> `
                        }
                    )    
                    .join("")    // empty space and li byDefault new line de ta hai
       )    //replace {{shortened_urls}} this part inside index.html with object

       return res.send(content);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal server error");
    }
})

//form data handle
router.post("/",async(req,res)=>{
   try {
     const{url,shortCode}=req.body;      // data get 

  // store in our new variable = if shortcode exist then store || if short code not exist so made our random short code and store
     const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");   
           
 // data get from server when hit the /shorten url  (Reading data from links.json )
    const links = await loadLinks();         //here loadLinks is fun. which is define above and use for data(links.json) get from server
         
                 
 //checking for Duplicate URLs/Short Codes exist -
   if(links[finalShortCode]){         // here it's  object property for access like links.finalShortCode  (if true send err)

         return res.status(400).send("Short Code already exist, please choose another.");              //then send error
     }  

   //^ above all condition not true it means new data get , then set  
   // Writing Data to links.json 
   links[finalShortCode] = url;         //url value pass for particular ShortCode  (so now links.json file m data is formate m store {finalShortcode : url}...)

   await saveLinks(links)          //links(key:value) pass as argument to saveLinks fun    
   return res.redirect("/");       // after form submit redirect on home page
   } catch (error) {
     console.error(error);
     return res.status(404).send("Internal server error")
   }
})

//Redirect link when user click or shortened url
 router.get("/:shortCode",async(req,res)=>{                 // here shortCode path is dynamic route
   try {
    const {shortCode}=req.params;      //dynamic route get using req.params
    const links=await loadLinks();     // data add

    if(!links[shortCode]) return res.status(404).send("404 error occurred");  // check data is exist or not

    return res.redirect(links[shortCode]);         // agar all is fine then redirect that shortcode link
   } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error"); 
   }    
 })

 
 //now router default export 
//  export default router;

 //when work with multiple router used Named export (best practice)
 export const shortenerRoutes = router;            // here, particular name also assign 
