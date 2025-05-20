//! Template Engines :-  (It use for SSR- Server side rendering)

//# A template engine in Express.js is used to " render dynamic HTML by injecting data into templates ". (In simple word we can add dynamic content in our html file in express using template engine.)
//# Popular engines like EJS, Pug, or Handlebars can be integrated with Express.
//# All engines have different syntax similar to HTML, but it helps to pass down dynamic values from express to HTML.

//? how to use in express.js-
//* Set the engine using app.set('view engine','ejs') and specify the template folder with app.set('views', './views')
//* Render templates using res.render('templateName',{key:value})
//* e.g       res.render('index',{title:'Welcome', message:'Hello World'});


//$ EJS -       {it's work like jsx (where inside javascript html code use and inside html curly braces use for dynamic js data render) but on the Other hand EJS - Inside HTML file we render Js Data using ejs <% _js_ %> for print <%= variable %> }
//* Install the engine using npm(e.g, npm install ejs) and create templates with placeholder like  <%= title %> for data insertion.
//# EJS(Embedded JavaScript) is a simple templating engine for generating dynamic HTML pages.
//# It integrates JavaScript logic into HTML using special tags like <%=  %> 
//# Supports JavaScript features like loops, conditionals and partials.
//# Outputs the value into the template Escapes HTML (<%= %>) by default to prevent injection, with options for unescaped output (<%-).
//# EJS Docs so many tags available

//^1 Ejs syntax - for Comments :-  
//* Add comments in your templates using  <%#  ...  %> , These are not included in the output.
   // <%# This is a comment %>
   // <p> Visible content </p>


//^2 Ejs Syntax - Outputting Values

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


 //^3 Ejs Syntax- Loops
 // use Javascript for loop / foreach loops to render lists. Note Every line opening or closing ejs tag <% %> use
  
    //^ Ejs in html file with for loop 
    //    <ul> 
    //         <% for(let i=0; i< item.length; i++) {  %>          <!-- for loop apply ,  EJS help Js use inside HTML-->
    //    <li> <%= item[i] %>  </li>                  <!-- print item -->
    //         <%   }  %> 
    //    </ul>

    // Express file
    //    res.render('index', { items: ["Apple","Banana", "Cherry" ]});

    // Output
    // <ul>
    //     <li> apple </li>
    //     <li> banana </li>
    //     <li> cherry </li>
    // </ul>


  
    //^ Ejs in html file with forEach loop 
    //    <ul>
    //         <% items.forEach(function(item) {  %>         <!-- forEach loop apply ,  EJS help Js use inside HTML-->
    //    <li> <%= item %>  </li>                  <!-- print item -->
    //         <%   })  %> 
    //    </ul>

    // Express file
    //    res.render('index', { items: ["Apple","Banana", "Cherry" ]});

    // Output
    // <ul>
    //     <li> apple </li>
    //     <li> banana </li>
    //     <li> cherry </li>
    // </ul>


//^ 4. EJs Syntax-  Include partials        {it's work like component for re-use }
//* Re-use common templates " using include" like header, footers, etc.     

  // ejs html file
  //  <%- include('header') %>              <!-- unescape output use for header component show -->
  //  <h1>Welcome to my site</h1>
  //  <%- include('footer') %>
//^ make sure header.ejs and footer.ejs are in your views folder
//^ if they are inside a folder then use folder/header    