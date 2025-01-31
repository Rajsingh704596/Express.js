// import and export functionality is part of EcmaScript module , so if we need to put this command in package.json -  "type":"module",

import express from 'express';  
import { PORT } from './zod.js';          //(case 2) make sure .js add at the end that important  (In React we don't need like this but in Node.js we import like this when import .js file)
import path from "path" ;             //path use so we get path of public folder and inside file html and css which is send in Express.js

//^ instance create of express
const app = express();

//#  app - This variable hold the created Express app, which we can use to : 
//#        Define routes( app.get(), app.post(), etc. )
//#        configure middleware ( app.use() )
//#        start the server ( app.listen() )


//^ Create Server
//^ Path route Create 
 app.get("/check", (req, res) => res.send("Home path hit in local store so we send response here"));

 app.get("/about", ( req, res)=> res.send("<h1> Hello about page </h1>"));
 
 app.get("/contact",( req, res)=>{
   return res.send(` <h2> Backend Use to run Html code </h2>
                     <p> multiple line use , here we pass html code</p> `)
 });

 //# Send file in express.js , so we need to store that file in public folder

// now in Express if we use Es module so we don't use (__dirname), (__filename) we have alternative option to get path just import like this
 app.get("/",(req,res)=>{
        //  console.log(import.meta.dirname);       // o/p-          D:\Express.js\ExpressJsIntro 
        //  console.log(import.meta.url);           // o/p-          file:///D:/Express.js/ExpressJsIntro/app.js 

        //^ we create instance to get absolute path from import.meta.url like this
        // const __filename= new URL(import.meta.url).pathname;
        // console.log(__filename);     //o/p-   /D:/Express.js/ExpressJsIntro/app.js
        // res.send("hi")

        const homePagePath =path.join(import.meta.dirname, "public", "index.html");     // so we get path public folder inside index.html which join with this file directory
        //instead of send we use sendFile 
        res.sendFile(homePagePath);

 })
//@ but at a time we send one file , that's drawback

//^ (better way)
//$ we use express.static to serve html, css a js file in express.js
//* Static files as name mentions are files which don't change , these can be assets like images, css, html, font etc.
//* Express has middleware named express.static("public") which we can use to serve static files. it will handle all files inside the directory provided.
//* files in the static directory are accessible via their URL. for instance, if we have an image logo.png in the public folder, we can access it in the browser with https://localhost:3000/logo.png.

// app.use(express.static("public"));    // it's work but we use to apply absolute path(root path) for better way

const staticPath =path.join(import.meta.dirname,"public");
// app.use(express.static(staticPath));    //here default show in localhost:3000
 app.use("/public", express.static(staticPath));   // now when hit /public then show public folder


 //^ server listen
//  const PORT = process.env.PORT || 3000;                   //$  normal validation  (case 1)


 app.listen( PORT, () => {
     console.log(`Server is running at port : ${PORT}`);
 });



//@ Code run Method in Terminal:-
//  node --watch .\app.js
// o/p- Server is running at port : 3000


// In localhost:3000  when hit home path -- o/p-  Home path hit in local store so we send response here
// when we inspect Network section
                //  Request URL:  http://localhost:3000/
                // Request Method: GET
                // Status Code: 304 Not Modified 

// In localhost:3000/about  when hit home path -- o/p-  Hello about page
// when we inspect Network section
                //  Request URL:  http://localhost:3000/about
                // Request Method: GET
                // Status Code: 200 Ok   (first time show again hit 304 not modified show )
                // content-type: text/html; charset=utf-8


// In localhost:3000/contact  when hit home path -- o/p- Backend Use to run Html code
                                              //          multiple line use , here we pass html code

// when we inspect Network section
                //  Request URL:  http://localhost:3000/contact
                // Request Method: GET
                // Status Code: 200 OK  
                // content-type: text/html; charset=utf-8



//^ after add .env file we run code like this                 
//PS D:\Express.js\ExpressJsIntro> node --env-file=.env  --watch app.js
//Server is running at port : 3000

//^package.json k ander script m add kar-ege-    "dev" : "node --env-file=.env  --watch app.js"
// then     
// PS D:\Express.js\ExpressJsIntro> npm run dev         
// > express@1.0.0 dev
// > node --env-file=.env  --watch app.js
// Server is running at port : 3000   


//$ Note- package.json uss directory m hona chahiye jaha app.js file hai , or agar package.json parent m hai to package.json k ander script m change karege root kyuki like this-   "dev" : node --env-file=./ExpressJsIntro/.env --watch ./ExpressJsIntro/app.js , tb npm run dev chalega

//$  npm run hamesha uss directory ko Current working directory manta hai jaha package.json hai, to .env file relative path shi se set karna padega 

//$ package.json or node_modules ko uss directory m rakhe jaha npm run command chalana ho

