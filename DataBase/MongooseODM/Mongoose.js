//! Introduction to Mongoose-

//# Mongoose is an ODM(Object Document Mapping) library for MongoDB and Node.js
//# It provides a "higher-level abstraction over the native MongoDB driver, allowing developers to define schemas and interact with MongoDB using objects".
//# Mongoose allows us to "define models based on schemas which represent the structure of documents in a MongoDB collection".
//# It provides'built-in methods for CRUD operations (Create, Read, Update, Delete)' and validates data before saving it to the database.
//# Mongoose supports "middleware(also called hooks) for functions like validation, pre-save, and post-save, allowing developers to perform encryption, logging, or data transformation".
//# It helps to manage relationship between data, providing supports like population (joining data from different collections).


import mongoose from "mongoose";


//^ Step 1 : Create connection  to connect the mongoDB server
//directly try and catch method use 
try {
    await mongoose.connect("mongodb://localhost:27017/mongoose_database");    // here we pass connection url/database name (together)
    // await mongoose.connect("mongodb://127.0.0.1/mongoose_database");   // if localhost:27017 connection url not work then we put localhost ip address for local machine
   // mongoose.set("debug",true);      //.set method help to give o/p which query we perform  ,  // Enable debug mode to see queries
   console.log("mongodb database connected");
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
const Users = mongoose.model("User", userSchema);   //todo collection name must be write here in singular form but it create in database plural form (e.g. Users)


//$ CRUD operation Mongoose-

//? step 1: create document after connection inside Collection -
//^ 1st way- create()  --use for multiple document insert which is object form 
// await Users.create({name:"Root", age:21, email:"abc123@gmail.com"});        // return promise so we use await 

// await mongoose.connection.close();       // at the end close connection using close method

//o/p- in terminal

// Mongoose: users.insertOne({ name: 'Root', email: 'abc123@gmail.com', age: 21, createdAt: new Date("Thu, 23 Jan 2025 17:06:35 GMT"), _id: ObjectId("6792771b7a1f36a504f86284"), __v: 0}, {})
// Mongoose: users.createIndex({ email: 1 }, { unique: true, background: true })

//todo- here if we again run code then it show error for duplicate data insert because in schema we write that email should be unique that's the reason next document not create.

//^ after step 3 we apply this-

// array of object
const userData=[
    {name:"Ash", email:"ash1@gmail.com", age:25},
    {name:"Boss", email:"boss2@gmail.com", age:27},
    {name:"Rj", email:"rj3@gmail.com", age:30},
];


//? Insert (Create data/document)
//^ 2nd way(better) - insertMany()     -- array of object easily insert  
// await Users.insertMany(userData);

//^ 3rd way - save()     -- object data insert    
//@ here schema m object m structure bataya hai or yaha new userdata array of object m pass ho rha hai to save method directly insert nhi kar skta hai isliye for of loop lagaya hai taki each document ko alag alag insert kar paye
//    for (const user of userData) {
//    const newUser = new Users(user);   //Create a new document/instance 
//    await newUser.save();                 //Save the instance to the database
//    }

//@ if userData is only object form then we insert like this with .save() method-
//   const newUser = new Users(userData); // create a new document/instance
//   await newUser.save();   // save the instance to the database inside collection as a document

//? step 2: Read data/document
//^ 1 way- .find() method
// const users =await Users.find()        //In Mongoose we don't need to use .toArray() method , mongoose automatic convert cursor data into array form
// console.log(users);

//^ data print which age is greater than 25
// const users =await Users.find({age:{$gt:25}});
// console.log(users);

//^ 2 way- .findOne() method -  only find one document which is firstly true with condition (data read top to bottom)
// const user =await Users.findOne({age:{$gt:25}});
// console.log(user);

//^ 3 way- .findById() method
// const user = await Users.findById('6793afc17fc778b85f455ab4');
// console.log(user); 

// const specificUserDetail = await Users.findById(
//   '6793afc17fc778b85f455ab4',
//   'name age' // only name or age field return 
// );
// console.log(specificUserDetail);

//? step 3: Update data/document  
//^ 1 .updateOne() method     (we use $set method for new value set) 
// const updatedUser = await Users.updateOne({email:"ash1@gmail.com"},{$set: {age:30}});      // ({first parameter which field data update},{which data change})
// console.log(updatedUser);

//^ 2 .updateMany() method   //only 2 parameter pass (first- Filter/query condition , second- Update operation)
// const updatedManyUser = await Users.updateMany({email:"boss@gmail.com"},{$inc: {age:5}});      // ({first parameter which field data update},{which data increment})
// console.log(updatedManyUser);

// const result = await Users.updateMany(
//   {email: "rj3@gmail.com"},
//   {$inc: {age: -2}}
// );
// console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);

//^ 3 .findByIdAndUpdate()
// const updatedUser = await Users.findByIdAndUpdate(
//   '6793afc17fc778b85f455ab4', // ID
//   { $inc: { age: 1 } },        // Update operation (age increment by 1)
//   { new: true }                // Updated document show in terminal         // if we not use this line we got before update result in terminal      
// );
// console.log(updatedUser);     

//? Delete data

//^ 1st way- .deleteOne() method- 
// const deletedUser = await Users.deleteOne({email:"ash@gmail.com"});    //which have same email id delete that data
// console.log(deletedUser);

//^ 2nd way- .deleteMany() method-
// const deletedManyUser = await Users.deleteMany({age:30});    //which age have same in all document that is deleted 
// console.log(deletedManyUser);

//^ 3rd way- findByIdAndDelete() method-
// const deletedUser = await Users.findByIdAndDelete('6793afc17fc778b85f455ab4');
// console.log(deletedUser);



await mongoose.connection.close();       // at the end close connection using close method





//Todo for run this file in Terminal-  PS D:\FullCourse_Backend\Express.js\DataBase\MongooseODM> node Mongoose.js
//! Note -- here without express connect , only communicate B/w Mongoose ODM and MongoDb server in Node.js and perform CRUD operation. 






