//! Model View Controller (MVC) -

//# MVC is a "software design pattern" that separates an application into "three distinct layers: Model, View, Controller". Each with a specific responsibility.

//$ 1. Model : Manages Data and Logic  
//  Represent the data of the application, handles business logic, and interacts with the database (e.g CRUD operations). [Database - Model or schema part]

//$ 2. View : Handles User Interface
//  Display the data to the user. It's responsible for rendering the presentation(HTML, CSS, JavaScript) based on the data provided by the Controller. [Frontend Part]

//$ 3. Controller : The Mediator
//  Act as the intermediary between the Model and View. It handles user input, interacts with the Model to fetch or update data, and passes the data to the View for display. [Main Logic]


//? MVC Analogy Explanation -

//^ 1. Model (warehouse)-
// The Model represents the data and the logic to handle it. Think of it as the warehouse where all the goods (data) are stored .
// It's responsible for managing and updating data .
// for e.g - What items are available ? , What's the stock quantity? , Adding or removing items based on demand.

//^ 2. View (Shop or Customer)-
// The View is the final interface where the customer(end-user) interacts.
// It could be the shop displaying the products (e.g HTML/Css on a webpage) or the person who ordered who sees the delivered product.
// The View only knows how to present the data but doesn't handle or process it directly.

//^ 3. Controller(Delivery Person)-
// The Controller is the middleman or mediator , like the delivery boy who :-
  // Get the order from the customer (View).
  // Fetches the right product(data) from the warehouse (Model).
  // Delivers the goods back to the customer (view).

