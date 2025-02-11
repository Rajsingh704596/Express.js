import { db } from "./config/db.js";
import { eq } from "drizzle-orm";                    // used with update & delete crud ope. inside where eq use (filter and conditional operator) 
import { usersTable } from "./drizzle/schema.js";

// main fun define where CRUD operation perform
const main=async()=>{

//? Create Query
    //^ insert data into table(userTable)
    // const insertUser = await db.insert(usersTable).values({
    //     name:"dr",
    //     age:"28",
    //     email:"test@rj.com",
    // });
    // console.log(insertUser);

    //^ insert data into table(userTable)
//     const insertMUser = await db.insert(usersTable).values(
//       [  {  name:"dr2",  age:"29",  email:"test2@rj.com"},
//          {  name:"dr3",  age:"30",  email:"test3@rj.com"},
//          {  name:"dr4",  age:"31",  email:"test4@rj.com"},
//       ] 
// );
//     console.log(insertMUser);


//? Read Query
//^ all data read
const users= await db.select().from(usersTable);
console.log(users);

//^ particular data read
// const specificUsers= await db.select().from(usersTable).where({
//     email:"test2@rj.com",
// });
// console.log(specificUsers);


//? Update Query
//^ not recommended way
// const updatedUser = await db.update(usersTable).set({name :"dr5"}).where({ email : "test4@rj.com"});
// console.log(updatedUser);

//^ Recommended way  ( where )
// const updateUser = await db.update(usersTable).set({name :"dr5"}).where(eq( usersTable.email, "test4@rj.com"));
// console.log(updateUser);

//? Delete Query
// await db.delete(usersTable).where({email:"test3@rj.com"});
// await db.delete(usersTable).where(eq( usersTable.email, "test@rj.com"));  // recommended way

}


//fun call and if error occur then show in log
main().catch((error)=>{
   console.log(error);
})