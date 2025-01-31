//! Template Engines :-

//# A template engine in Express.js is used to render dynamic HTML by injecting data into templates.
//# Popular engines like EJS, Pug, or Handlebars can be integrated with Express.
//# All engines have different syntax similar to HTML, but it helps to pass down dynamic values from express to HTML.

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
 
