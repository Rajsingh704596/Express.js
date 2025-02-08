import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();         //instance create that use to access table


const main=async()=>{

//# CRUD operation perform with Prisma in mySql database

//$ Create (Insert Data)-

//^ for single user insert in table
//   const user = await prisma.user.create({
//       data:{
//         name: "mohit",
//         email:"mohit@gmail.com",  
//       },
//   })
//   console.log(user);

//^ for Multiple user insert in table
//   const newUser = await prisma.user.createMany({
//       data:[
//           { name: "Vinay" , email:"vinay@gmail.com"},
//           { name: "Tanay" , email:"tanay@gmail.com"},
//     ]
//   })
//   console.log(newUser);

//$ Read DB Data -

//^ Get all Users data in table
// const users = await prisma.user.findMany();
// console.log(users);

//^ find Unique data - so here unique id provide
// const users = await prisma.user.findUnique({
//     where: { id: 2 },
// });
// console.log(users);

//^ Get Users with Filtering , here name is not unique
// const users = await prisma.user.findMany({
//     where: { name: "vinay" },
// });
// console.log(users);

//$ Update Data (Modify data)-

//^ update one User in table-
// const updatedUser=await prisma.user.update({
//     where: {id:3},                // here we must pass unique field for single user update, in our schema id or email are only unique
//     data: {name:"Root"},          // update data
// });
//   console.log(updatedUser);

//^ update Multiple User in table-      
const updatedUser=await prisma.user.updateMany({
    where: {name:"Root"},
    data: {email:"rok@gmail.com"},     //update data
});
  console.log(updatedUser);


 //$ Delete (Remove Data)
 
 //^ Delete One User 
//  const deleteUser = await prisma.user.delete({
//     where:{id:3},                   // must be pass unique id 
//  });
//  console.log(deleteUser);

 //^ Delete Multiple User 
//  const deletedUser = await prisma.user.deleteMany({
//     where:[{id:1}, {id:2}, {id:3}],                 // here we pass anything like name , email, id in array of obj.
//  });
//  console.log(deletedUser);

};


// fun. call , if error occur then show also disconnect connections
main()
     .catch((e)=> console.error(e))
     .finally(async()=>{await prisma.$disconnect();
     })

 
//? Prisma generate - Updates the Prisma Client code so we can use the latest schema in our application    (if CRUD not work we use this code in terminal:-  npx prisma generate ) 




//O/p-
// PS D:\Express.js\DataBase\PrismaORM> node index.js
// [
//     {
//       id: 1,
//       email: 'mohit@gmail.com',
//       name: 'mohit',
//       createdAt: 2025-02-08T09:40:37.787Z,
//       updatedAt: 2025-02-08T09:40:37.787Z
//     },
//     {
//       id: 2,
//       email: 'vinay@gmail.com',
//       name: 'vinay',
//       createdAt: 2025-02-08T10:03:01.432Z,
//       updatedAt: 2025-02-08T10:03:01.432Z
//     },
//     {
//       id: 3,
//       email: 'tanay@gmail.com',
//       name: 'tanay',
//       createdAt: 2025-02-08T10:03:01.432Z,
//       updatedAt: 2025-02-08T10:03:01.432Z
//     }
//   ]
//   PS D:\Express.js\DataBase\PrismaORM> node index.js
//   {
//     id: 2,
//     email: 'vinay@gmail.com',
//     name: 'vinay',
//     createdAt: 2025-02-08T10:03:01.432Z,
//     updatedAt: 2025-02-08T10:03:01.432Z
//   }
//   PS D:\Express.js\DataBase\PrismaORM> node index.js
//   [
//     {
//       id: 2,
//       email: 'vinay@gmail.com',
//       name: 'vinay',
//       createdAt: 2025-02-08T10:03:01.432Z,
//       updatedAt: 2025-02-08T10:03:01.432Z
//     }
//   ]
//   PS D:\Express.js\DataBase\PrismaORM> node index.js
//   {
//     id: 3,
//     email: 'tanay@gmail.com',
//     name: 'Root',
//     createdAt: 2025-02-08T10:03:01.432Z,
//     updatedAt: 2025-02-08T11:03:34.613Z
//   }
//   PS D:\Express.js\DataBase\PrismaORM> node index.js
//   { count: 1 }