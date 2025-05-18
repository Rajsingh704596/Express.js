//! Template Engines :-

//# A template engine in Express.js is used to " render dynamic HTML by injecting data into templates ". (In simple word we can add dynamic content in our html file in express using template engine.)
//# Popular engines like EJS, Pug, or Handlebars can be integrated with Express.
//# All engines have different syntax similar to HTML, but it helps to pass down dynamic values from express to HTML.

//? how to use in express.js-
//* Set the engine using app.set('view engine','ejs') and specify the template folder with app.set('views', './views')
//* Render templates using res.render('templateName',{key:value})
//* e.g       res.render('index',{title:'Welcome', message:'Hello World'});


//$ EJS -
//* Install the engine using npm(e.g, npm install ejs) and create templates with placeholder like  <%= title %> for data insertion.
//# EJS(Embedded JavaScript) is a simple templating engine for generating dynamic HTML pages.
//# It integrates JavaScript logic into HTML using special tags like <%=  %> 
//# Supports JavaScript features like loops, conditionals and partials.
//# Outputs the value into the template Escapes HTML (<%= %>) by default to prevent injection, with options for unescaped output (<%-).
//# EJS Docs so many tags available

//^ Ejs syntax - for Comments :-  
//* Add comments in your templates using  <%#  ...  %> , These are not included in the output.
   // <%# This is a comment %>
   // <p> Visible content </p>


//^ Ejs Syntax - Outputting Values

//* Escaped Output (<%= ... %>) 
//  Used to print dynamic content, escaping any special HTML characters to prevent injection.
    // Ejs file 
    //    <h1><%= title %> </h1>         <!-- Prints : Welcome -->
    
    // Express file
    //    res.render('index', { title:'<Welcome>'});

    // Output
    // <h1>&lt;Welcome&gt;</h1>
 
//* Unescaped Output (<%- ... %>)        
//  Prints raw HTML without escaping . It's dangerous, make sure to sanitize data before using it.

    // Ejs file 
    //    <h1><%- content %> </h1>         <!-- Insert raw HTML -->
    
    // Express file
    //    res.render('index', { content:'<strong>Bold Text</strong>'});

    // Output
    // <div><strong>Bold Text</strong></div>
 
