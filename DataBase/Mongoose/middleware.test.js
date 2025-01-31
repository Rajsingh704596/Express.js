//! Mongoose Middleware -

import mongoose from "mongoose";

//^ step 1: to connect to the mongoDB server
try {
    await mongoose.connect("mongodb://localhost:27017/mongoose_middleware");  // url and database name pass together

   mongoose.set("debug",true);
} catch (error) {
    console.error(error.message);
    process.exit();
}


//^ Step 2: Create schema 
const userSchema = mongoose.Schema({
  
    name:{type:String, required:true},               
    email:{ type:String, required:true, unique:true },    
    age:{type:Number, required:true, min:5},      
    // createdAt: {type: Date, default:Date.now() },   
    // updatedAt: {type: Date, default:Date.now() },              
    
           // no need to use middleware for update time of updateAt field and no need to apply last 2 schema just use timestamps :true   and pass in other object         
},{
    timestamps: true,         // now when update age , time also update on updateAt field
})


 //^ step 6: we will use middleware for Update time of updateAt field here (before create model , position must be define here otherwise middleware not work)
 // pre middleware use , In middleware we need to use "this" keyword so we use tradition fun , because arrow fun this keyword not work
 //here we pass 3 methods inside array , when any of these method run then middleware run first after that these 3 method run
// userSchema.pre(["updateOne", "updateMany", "findOneAndUpdate"], function(next){             
//     this.set({updatedAt: Date.now()});             // field which we want update , updateAt field date and time up to date
//     next();     // next data execute which is method like updateOne ...
// });

//data ko save kar ne se ph-le middleware cha-le to us ke li ye code-
// userSchema.pre("save", function(next){
//     this.set({});
//     next();      //for next data execute which is save 
// })
//* this middleware use for this example where it work before save data
// const newUser = new Test({
//     name:"WebDev",
//     email:"web@example.com",
//     age:26
// });
// await newUser.save();


//^ step 3: Creating a model (means collection)
const Users = mongoose.model("user", userSchema);

//^ step 4: to insert the data
// await Users.create({ name: "Rocky", age: 28, email:"rok@gmail.com"});

// step 5: we can update age 
await Users.updateOne({email:"rok@gmail.com"},{$set:{age:30}});


//^ step 7: connection close
await mongoose.connection.close();



// o/p-
// Restarting '.\\middleware.test.js'
// Mongoose: users.updateOne({ email: 'rok@gmail.com' }, { '$set': { age: 30, updatedAt: new Date("Sat, 25 Jan 2025 16:55:31 GMT") }}, {})
// Mongoose: users.createIndex({ email: 1 }, { unique: true, background: true })
// Completed running '.\\middleware.test.js'