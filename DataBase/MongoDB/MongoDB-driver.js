//! MongoDB Drivers-
//# MongoDB drivers are language-specific libraries that allow applications to interact with MongoDB database.
//# They provide APIs for connecting, querying, and managing data within MongoDB.
//# MongoDB drivers are available for various programming languages, including Node.js, Python, Java, C++, and more.


//! for mongoDB driver install package-    npm i mongodb


import { MongoClient } from "mongodb";    // import MongoClient

//^ new instance create
const client = new MongoClient("mongodb://localhost:27017/")         //here we pass MongoDB URI (which we create cluster time) for connect local/cloud mongodb server   //here we can use local ip - "mongodb://127.0.0.1"  , if that is not work

//^ connect with mongodb server
await client.connect();          //it's return promise so that we use await

//^ database create
const db = client.db('mongodb_nodejs_db')        // create database name - mongodb_nodejs_db    

//^ create collection
const userCollection = db.collection("user");    // create collection name- user  


//^ CRUD Operation -
//$ Create Data-
//@insert one data in userCollection
// userCollection.insertOne({name:"Rock Star", age:25});      // mongodb is flexible Schema-less (no fixed schema required), so any data pass 

//@insert many data
// userCollection.insertMany([
//     {name:"Royal", age:"21", team:"A"},
//     {name:"Root", age:"23", team:"b"},
//     {name:"Right", age:"21", team:"c"},
// ])

//$Read data-
// const usersCursor= userCollection.find();
// console.log(usersCursor);                       //data get in cursor format, it's also an object which return database
//        //we used for of loop to show object data from userCursor, it's also return promise so we use await
// for await (const user of usersCursor){
//     console.log(user);                          // data get in object form in terminal
// }

//@if we convert object to array then we also get result  , and it's also return promises
// const userCursor =await userCollection.find().toArray();
// console.log(userCursor)                 // data get in object form in terminal

//@find one user
//const user = await userCollection.findOne({ name:"Right"});  // it's also return promise so we use await , if we not use it's gives Promise { <pending> }
// console.log(user);            //  {_id: new ObjectId('678fcf77b180de58d121df80'), name: 'Right', age: '21', team: 'c' }
// console.log(user._id);               //new ObjectId('678fcf77b180de58d121df80')
// console.log(user._id.toHexString());  //678fcf77b180de58d121df80

//$ Update data-
// await userCollection.updateOne({name:"Royal"},{$set:{age:30}});      // document jisme name : "Royal" uski age ko 30 kar dega

// await userCollection.updateMany(
//     { age: { $lt: 30 } },  // condition: age jo 30 se kam ho
//     { 
//       $set: { status: "active" },      // status ko "active" set kar na
//       $push: { hobbies: "coding" },    // hobbies array mein "coding" add kar na
//       $inc: { age: 1 }                 // age ko 1 se increment kar na
//     }
//   );

//$ Delete data-
// await userCollection.deleteOne({name:"Rock Star"});  // in Collection top se jo bhi document k name field Rock star hai use delete kar tho

// const result=await userCollection.deleteMany({name:"Royal"}); // userCollection m jitne bhi document name field Royal hai use delete kar dega 
// console.log(`${result.deletedCount} document deleted`);        //now this line show in terminal how many documents delete in collection



//Todo for run this file in Terminal-  PS D:\FullCourse_Backend\Express.js\DataBase\MongoDB> node MongoDB-driver.js
//! Note -- here express ki need nhi pdi only MongoDB driver k component MongoClient se mongoDB database m bane hue localhost cluster se connection karke CRUD operation perfomr kiya 