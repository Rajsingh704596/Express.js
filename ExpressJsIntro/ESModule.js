//! ES Modules - Caveats 

//$ Es Modules work when we use "type":"module", in package.json :-
//# Es Modules(import/export) are an alternative to CommonJS(require/ module.exports).
//# In newer versions of Node.js(14.8+), we can use "top-level await" without needing to wrap it in an async function.
//  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");                                
//  const data = await response.json();
//  console.log(data);                                                // so it's work in backend node.js without wrap in async fun.

//$ for getting directory or file path :-
//# In CommonJS, __dirname (used for current directory) and __filename (used for current file path) are available by default.
//console.log(__dirname);    console.log(__filename);
//# In ES Modules, they don't exist.

//$ Solution(Node.js 20.11.0+):-
//  console.log(import.meta.dirname);          //o/p- D:\Express\ExpressJsIntro
//  console.log(import.meta.filename);         //o/p- D:\Express\ExpressJsIntro\ESModule.js
//# In Node.js 20.11.0 and above, __dirname and __filename can be accessed using import.meta.

//$ Solution for Older Versions(Before 20.11.0):-
// import path from "path";
// const __filename = new URL(import.meta.url).pathname;
// const __dirname= path.dirname(__filename);
// console.log({__dirname, __filename});

//! Route Parameters in Express.js-
//# Route parameters in Express.js are "dynamic parts of the URL" that can be accessed using "req.params"
//# They are defined in the route path with a colon (:), e.g /user/:id/view/:article  , where "id and article" is a route parameter.
//# we can access the dynamic value of a route parameter via "req.params.id", "req.params.article" in the route handler.
//# Route parameters are used to capture dynamic values from the URL and pass them to the route handler for processing, like user IDs, product name etc.
//# Express automatically parses and makes the values available in req.params as an object where the parameter name is the key.


//! Query Parameters in Express.js
//# Query parameters are key-value pairs appended to URL after "?", and multiple query parameter separated by "&" , e.g /search?query=express&limit=10
//# In Express.js, they can be accessed using "req.query", which returns an object containing the parameters.
//# for example, in /search?page=4, req.query.page will give "page".
//# Query parameters are often used to pass optional or filter data to the server without modifying the route.
//# They are always part of the URl and visible in the browser address bar.


//! Form Submission in Express.js-
//# we can use the <form> tag with the action attribute to specify the URL to which the form data is submitted.

//# By default, a form will use the GET request, and we can handle it with app.get to access form data via req.query, as the data is sent through the URL as query strings.

//# Since URLs have a length limit, we can use the POST method for form submissions, which sends the data in the request body, allowing for larger amount of data.
   //# to access data from a POST request, we must first use the express.urlencoded() middleware to parse the request body.
   //# the urlencoded option {extended:true} uses the qs library to parse the query string, allowing for more complex structures like nested objects, which the default parser cannot handle.
   //# Use req.body in app.post to access the form data sent in the body of a POST request. 

//! Handling 404 page-
//# Use a middleware function with no specific route, like app.use((req, res)=>{...}), to "handle unmatched routes".
//# Inside the middleware, send a 404 status using res.status(404) and a custom message or HTML response.  [ Note - status code: 200-response ok, 302- redirect, 404- website error, 500 above- server error]
//# Place this middleware after all defined routes to catch only unhandled requests.
    //^  app.use((req,res)=>{res.status(404).send("page not found")})

//! Separating routes in separate modules-
//# A route in Express.js is a tool to define modular and reusable routes in an application.
//# It is create using express.Router() to handle related routes together 
//# Routes can be defined using methods like router.get() or router.post()       {app word replace with router}
//# The router is mounted in the main app using app.use(`/basepath', router)


import express from "express";
import path from "path";
const app =express();

//? route create and access Route parameter 
app.get("/profile/:username", (req,res)=>{
    console.log(req.params);               // in terminal o/p -[Object: null prototype] { username: 'rock' }
    res.send(`<h1>Username is ${req.params.username}</h1>`);
})
//^ Multiple route parameter define here                      //here slug - represent unique identifier 
app.get("/profile/:username/article/:slug", (req,res)=>{        
     console.log(req.params);                     //       [Object: null prototype] { username: 'rock', slug: 'how-are-you' }
   // res.send(`<h1>Article ${req.params.username} by ${req.params.slug} </h1>`)                
   //when hit- localhost:3000/profile/rock/article/how-are-you          In UI o/p - Article rock by how-are-you

   //^ 1st way- if we use normal space in url how are you ,then enter it's add %20 in url automatic  , in ui space show perfectly b/w how are you

    //^ 2nd way- we remove - dash (hyphen symbol) inside ui like this        , and hit localhost:3000/profile/rock/article/how-are-you
    const formateSlug = req.params.slug.replace(/-/g," ");      //inside url slug parameter - dash replaced by space , here regex used
    res.send(`<h1>Article ${req.params.username} by ${formateSlug} </h1>`)              // In UI -  Article rock by how are you

})

//? route create and access Query Parameter
app.get("/product",(req,res)=>{ 
    // if i hit url with single query-  localhost:3000/product?search=royal
   // console.log(req.query);      //[Object: null prototype] { search: 'royal'}       
   // res.send(`<h1>User Product ${req.query.search}<h1>`)      // In Ui o/p-  user product royal
 
   //if i hit url with multiple query parameter- http://localhost:3000/product?page=2&limit=3
    console.log(req.query)                  //[Object: null prototype] { page: '2', limit: '3' }
    res.send(`<h1> the page is ${req.query.page} and it's limit ${req.query.limit} </h1>`)  // In UI o/p-  the page is 2 and it's limit 3

})

//? Handle Form Submission in Express-
//^ middle ware use to show form data in UI which is store in public folder inside index.html
const staticPath =path.join(import.meta.dirname,"public");
// app.use(express.static(staticPath));    //here default show in localhost:3000
 app.use("/public", express.static(staticPath));   // now when hit /public then show public folder

 //^Case-1 When Form submit : By default, form will use get req. so we can handle using app.get and access data using req.query
 app.get("/contact",(req,res)=>{
      console.log(req.query);      // [Object: null prototype] { name: 'rock', message: 'hi' }
    //   res.send("ok");
       res.redirect("/")

    //Drawback is when submit data, the data show in url  http://localhost:3000/contact?name=rock&message=hi
 })

//$ better way 
 //^ Case-2 we use post method, we need to pass middleware express.urlencoded({extended:true}) and inside app.post access data using "req.body"

 app.use(express.urlencoded({extended:true})) //must be used 
 app.post("/contact", (req,res)=>{
    console.log(req.body);         //o/p when normal parse - { name: 'rock', message: 'hi rock' }
                                  //o/p Complex parse (value pass in object form) handle when we use extended:true - { user: { name: 'royal', message: 'hello world\r\n' } }
    res.redirect("/public")        // after form submit redirect on same page
 })


 //? Handling 404 Page (Wrong path put then trigger , NOTE- This middle must be use at the end)-
 //^ only middleware fun with no specific route

  // Normal error mess send for unMatch route-
 app.use((req,res)=>{
   // return res.status(404).send("Page Not Found");   // instead of this we use html error page 
    
   //^ In express Views folder first create and inside folder we create file 404.html where html code define , so now 
   return res.status(404).sendFile(path.join(import.meta.dirname,"views","404.html")); // here sendFile where path join of current directory/views/404.html

 })

const PORT =3000;

app.listen(PORT,()=>{
    console.log("Server Starting on port 3000");
})