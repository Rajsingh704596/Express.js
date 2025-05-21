//! Mongoose Middleware (pre , post )

import mongoose from "mongoose";

//^ step 1: to connect to the mongoDB server
try {
    await mongoose.connect("mongodb://localhost:27017/mongoose_middleware");  // uri and database name pass together
    mongoose.set("debug",true);
} catch (error) {
    console.error(error.message);
    process.exit();
}


//^ Step 2: Create schema 
const userSchema = mongoose.Schema(
 {
    name:{type:String, required:true , minlength:3, maxlength:8},               
    email:{ type:String, required:true, unique:true },    
    age:{type:Number, required:true, min:5, max:100},    
    role: { type: String },  
    // createdAt: {type: Date, default:Date.now() },   
    // updatedAt: {type: Date, default:Date.now() },                
 },
 {
    //^ no need to use middleware (step 7(case-1,2)) for update time of updateAt field and no need to apply last 2 schema(createdAt , updatedAt) just use timestamps :true  and pass in other object         
    timestamps: true,         // now when update age , time also update on updateAt field  
 })


 //^ step 7: we will use middleware for Update "time of updateAt field" here (before create model , position must be define here otherwise middleware not work)
 // pre-save middleware use , In middleware we need to use "this" keyword so we use tradition fun , because arrow fun this keyword not work
//$ case-1 data ko save kar ne se phle middleware(pre-save) chale to uske liye code -   
// userSchema.pre("save", function(next){             
//     this.set({updateAt: Date.now()});                       //set method use for update  , so updateAt field m Date.now() value add kar tho
//     next();      //for next data execute which is save 
// })
//$ (case-1) this middleware use for this example where it work before save data [pre-save middleware]
// const newUser = new Test({
//     name:"WebDev",
//     email:"web@example.com",
//     age:26
// });
// await newUser.save();            // save karne se phle middleware(case-1) chalega

 //^ but here we want to run middleware before update document not save document

 //$ case-2 here (case-1 In pre-save middleware replace save and) we pass 3 methods inside array , when any of these method run then middleware run first after that these 3 method run   [pre-update middleware]
 //^ (so this code properly work for update "time of updateAt field" when Document update) [in short Automatic timeStamp update when document update]
// userSchema.pre(["updateOne", "updateMany", "findOneAndUpdate"], function(next){             
//     this.set({updatedAt: Date.now()});             // field which we want update , updateAt field date and time up to date
//     next();     // next data execute which is method like updateOne ...
// });

//$ case-3 Automatic Email formatting (when user create or update , email automatically change in lowercase ) [pre-save middleware]
// userSchema.pre('save', function(next) {
//   this.email = this.email.toLowerCase();
//   if (!this.role) this.role = 'user';         //before save if role not specify then automatically role value user set
//   next();
// });

//$ case-4  New User create hone pr console m log print ho [post-save middleware]
// userSchema.post('save', function(doc) {
//   console.log(`User created: ${doc.name}`);
// });

//! note- pre-save middleware run when insert data(document) create by .save() method


//^ step 3: Creating a model (means collection)
const Users = mongoose.model("user", userSchema);

//^ step 4: to insert the data
// await Users.create({ name: "Rocky", age: 10, email:"rok@gmail.com"});
// await Users.insertMany({ name: "Rohit", age: 18, email:"roy@gmail.com"});
// await newUser.save();                              // at this time pre-save middleware work

//^ step 5 find the data
// const user =await Users.findOne({age:{$gte:16}});         // $gte - greater than and equal to 16 (age) 
// console.log(user);

// step 6: we can update age 
// await Users.updateOne({email:"rok@gmail.com"},{$set:{age:30}});
await Users.updateOne({email:"roy@gmail.com"},{$set:{age:30}});


//^ step 8: connection close
await mongoose.connection.close();



// o/p-
// Restarting '.\\middleware.test.js'
// Mongoose: users.updateOne({ email: 'rok@gmail.com' }, { '$set': { age: 30, updatedAt: new Date("Sat, 25 Jan 2025 16:55:31 GMT") }}, {})
// Mongoose: users.createIndex({ email: 1 }, { unique: true, background: true })
// Completed running '.\\middleware.test.js'


// PS D:\FullCourse_Backend\Express.js\DataBase\MongooseODM> node middleware.test.js
// Mongoose: users.updateOne({ email: 'roy@gmail.com' }, { '$setOnInsert': { createdAt: new Date("Wed, 21 May 2025 13:58:49 GMT") }, '$set': { age: 30, updatedAt: new Date("Wed, 21 May 2025 13:58:49 GMT") }}, {})
// Mongoose: users.createIndex({ email: 1 }, { unique: true, background: true })
