//! Introduction to Mongoose-

//# Mongoose is an ODM(Object Data Modeling) library for MongoDB and Node.js
//# It provides a higher-level abstraction over the native MongoDB driver, allowing developers to define schemas and interact with MongoDB using objects.
//# Mongoose allows us to define models based on schemas which represent the structure of documents in a MongoDB collection.
//# It provides built-in methods for CRUD operations (Create, Read, Update, Delete) and validates data before saving it to the database.
//# Mongoose supports middleware(also called hooks) for functions like validation, pre-save, and post-save, allowing developers to perform encryption, logging, or data transformation.
//# It helps to manage relationship between data, providing supports like population (joining data from different collections).


import mongoose from "mongoose";


//^ Step 1 : Create connection  to connect the mongoDB server
//directly try and catch method use 
try {
    await mongoose.connect("mongodb://localhost:27017/mongoose_database");    // here we pass connection url/database name (together)
    // await mongoose.connect("mongodb://127.0.0.1/mongoose_database");   // if localhost:27017connection url not work then we put localhost ip address for local machine
   // mongoose.set("debug",true);      //.set method help to give o/p which query we perform  ,  // Enable debug mode to see queries
} catch (error) {
    console.error(error);
    process.exit();        //if error occur then process exit
}

//^ Step 2: Create schema (structure define which field we use for whole database)
const userSchema = mongoose.Schema({
    // name: String ,       //note data type first letter must be capital
    name:{type:String, required:true},               
    email:{ type:String, required:true, unique:true },    //means email type must be string, must be enter by user, and always unique
    age:{type:Number, required:true, min:18},      // so, we use multiple property here for more validation 
    createdAt: {type: Date, default:Date.now() }    // Fixed default date

    //Now only these 4 field create for every document if we want extra field insert , firstly we must define here .
})


//^ Step 3: Creating a model (model means collection )   (2 arg. pass first is collection name, second schema which we create)
const Users = mongoose.model("User", userSchema);   //note collection name must be write here in singular form but it create in database plural form (e.g. Users)


//^ create document after connection  -
// await Users.create({name:"Root", age:21, email:"abc123@gmail.com"});       

// await mongoose.connection.close();       // at the end close connection using close method



//o/p- in terminal

// Mongoose: users.insertOne({ name: 'Root', email: 'abc123@gmail.com', age: 21, createdAt: new Date("Thu, 23 Jan 2025 17:06:35 GMT"), _id: ObjectId("6792771b7a1f36a504f86284"), __v: 0}, {})
// Mongoose: users.createIndex({ email: 1 }, { unique: true, background: true })

//todo- here if we again run code then it show error for duplicate data insert because in schema we write that email should be unique that's the reason next document not create.

//after step 3 we apply this-
//$ CRUD operation Mongoose-

const userData=[
    {name:"Ash", email:"ash@gmail.com", age:25},
    {name:"Boss", email:"boss@gmail.com", age:27},
    {name:"Rj", email:"rj@gmail.com", age:30},
];


//? step 1: Insert (Create data)

// await Users.insertMany(userData);


//? step 2: Read data
// const users =await Users.find()        //In Mongoose we don't need to use .toArray() method , mongoose automatic convert cursor data into array form
// console.log(users);

//^ data print which age is greater than 30
// const users =await Users.find({age:{$gt:25}});
// console.log(users);


//? step 3: Update data  
//^ (we use $set method) 
// const updatedUser = await Users.updateOne({email:"ash@gmail.com"},{$set: {age:32}});      // ({first parameter which field data update},{which data change})
// console.log(updatedUser);

//^ (we use $inc method)
// const updatedManyUser = await Users.updateMany({email:"boss@gmail.com"},{$inc: {age:5}});      // ({first parameter which field data update},{which data increment})
// console.log(updatedManyUser);

//? Delete data
const deletedUser = await Users.deleteOne({email:"ash@gmail.com"});    //which have same email id delete that data
console.log(deletedUser);


await mongoose.connection.close();       // at the end close connection using close method